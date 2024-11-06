import React, { useState, useEffect } from "react";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import useProductStore from "../store/useProductStore";
import ReactMarkdown from "react-markdown";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const generationConfig = {
  temperature: 0.5,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 1000,
  responseMimeType: "text/plain",
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

const AiProductPage = () => {
  const { products, fetchProducts } = useProductStore();
  const [prompt, setPrompt] = useState("");
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();

    const savedHistory = localStorage.getItem("geminiHistory");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, [fetchProducts]);

  const saveHistory = (newHistory) => {
    setHistory(newHistory);
    localStorage.setItem("geminiHistory", JSON.stringify(newHistory));
  };

  const generateResponse = async (userPrompt, conversationHistory) => {
    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        generationConfig,
        safetySettings,
      });

      const contextPrompt = conversationHistory
        .map((item) => `User: ${item.prompt}\nAI: ${item.response}`)
        .join("\n");

      const productDataString = JSON.stringify(products);

      const fullPrompt = `
      Kamu adalah AI untuk customer service dari toko elektronik bernama Elektronika. Dan namamu adalah Elektrika
      Tugasmu adalah membantu user mengetahui produk-produk yang dimiliki oleh toko kita. 
      Untuk tambahan price disitu kursnya adalah dollar bukan rupiah.
      Kamu bisa mengambil informasi produk dari data berikut:\n\n${productDataString}
      
      ${contextPrompt}\nUser: ${userPrompt}\nAI:
    `;

      const result = await model.generateContent(fullPrompt);
      const response = result.response;
      return response.text();
    } catch (error) {
      throw new Error("Error generating response: " + error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const aiResponse = await generateResponse(prompt, history);

      const newHistoryItem = {
        id: Date.now(),
        prompt,
        response: aiResponse,
        timestamp: new Date().toISOString(),
      };

      const newHistory = [newHistoryItem, ...history];
      saveHistory(newHistory);

      setPrompt("");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteHistoryItem = (id) => {
    const newHistory = history.filter((item) => item.id !== id);
    saveHistory(newHistory);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-md shadow-lg">
        {/* Header */}
        <div className="p-6 border rounded-t-md bg-blue-bg-hero border-gray-200">
          <h2 className="text-2xl text-center font-bold text-white-news">
            AI Assistant For Elektronic Product
          </h2>
        </div>
        <div className="p-6 bg-white-news">
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded-md">
              {error}
            </div>
          )}

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex gap-2">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ask Me anything..."
                disabled={isLoading}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-2 bg-blue-button-create-product text-white rounded-md hover:bg-blue-hover-btn focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-400 transition-colors"
              >
                {isLoading ? "Generating..." : "Ask Elektrika"}
              </button>
            </div>
          </form>

          {/* History Section */}
          <div>
            <h3 className="text-lg font-semibold text-blue-bg-hero mb-4">
              Conversation History
            </h3>
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {history.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg p-4 border border-gray-200"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium text-gray-800">{item.prompt}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => deleteHistoryItem(item.id)}
                        className="text-sm px-3 py-1 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <ReactMarkdown className="text-sm text-gray-600 whitespace-pre-wrap">
                    {item.response}
                  </ReactMarkdown>
                  <p className="text-xs text-gray-400 mt-2">
                    {new Date(item.timestamp).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiProductPage;
