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

const AiChatbotPage = () => {
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
      Kamu adalah AI untuk customer service dari Perusahaan penyedia jasa reboisasi, landscaping taman dan mainteance taman bernama GreenScape. 
      Dan namamu adalah Greenly Tugasmu adalah membantu user untuk konsultasi tentang jasa kami yang dimiliki oleh perusahaan kita. 
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
    <div className="flex items-center justify-center min-h-screen bg-gray-blue shadow-none">
      <div className="w-full max-w-4xl mx-auto mt-10 p-4 h-screen flex flex-col">
        <div className="bg-gray-blue rounded-md flex-1 overflow-y-auto">
          {/* Header */}
          <div className="p-6 border rounded-t-md bg-main-green border-gray-200">
            <h2 className="text-2xl text-center font-bold text-second-cream">
              AI Assistant For Consultation
            </h2>
          </div>

          {/* Main Content */}
          <div className="p-6 bg-white-news flex-1 flex flex-col">
            {error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded-md">
                {error}
              </div>
            )}

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="mb-6 flex-shrink-0">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Ask Me anything..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-main-green focus:border-main-green disabled:bg-gray-100"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2 bg-dark-orange text-main-black font-semibold rounded-md hover:bg-light-orange focus:outline-none focus:ring-2 focus:ring-main-green focus:ring-offset-2 disabled:bg-light-orange transition-colors"
                >
                  {isLoading ? "Generating..." : "Ask Greenly"}
                </button>
              </div>
            </form>

            {/* History Section */}
            <div className="flex-1 overflow-y-auto">
              <h3 className="text-lg font-semibold text-main-green mb-4">
                Conversation History
              </h3>
              <div className="space-y-4 max-h-full pr-2 overflow-y-auto">
                {history.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg p-4 border border-gray-200"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium text-gray-800">
                          {item.prompt}
                        </p>
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
    </div>
  );
};

export default AiChatbotPage;
