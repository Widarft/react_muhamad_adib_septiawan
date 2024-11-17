import React, { useState, useEffect } from "react";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import usePortfolioStore from "../store/usePortfolioStore";
import projectData from "../data/projectData";
import ReactMarkdown from "react-markdown";

// Initialize Google Generative AI with the API key
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// Configuration for text generation
const generationConfig = {
  temperature: 0.5, // Controls the randomness of the output
  topP: 0.95, // Controls the diversity of the output
  topK: 64, // Limits the number of token candidates
  maxOutputTokens: 1000, // Maximum tokens in the response
  responseMimeType: "text/plain",
};

// Safety settings to filter harmful content
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
  const { portfolios, fetchPortfolios } = usePortfolioStore();
  const [prompt, setPrompt] = useState("");
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch portfolios and load chat history from local storage on component mount
  useEffect(() => {
    fetchPortfolios();

    const savedHistory = localStorage.getItem("geminiHistory");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, [fetchPortfolios]);

  // Save the chat history to state and local storage
  const saveHistory = (newHistory) => {
    setHistory(newHistory);
    localStorage.setItem("geminiHistory", JSON.stringify(newHistory));
  };

  // Function to generate AI response based on user input and context
  const generateResponse = async (userPrompt, conversationHistory) => {
    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        generationConfig,
        safetySettings,
      });

      // Build the conversation context from chat history
      const contextPrompt = conversationHistory
        .map((item) => `User: ${item.prompt}\nAI: ${item.response}`)
        .join("\n");

      // Convert portfolio and project data to string format
      const portfolioDataString = JSON.stringify(portfolios);
      const projectDataString = JSON.stringify(projectData);

      // Construct the full prompt with context and user input
      const fullPrompt = `
      You are an AI assistant named Greenly for a company named GreenScape that provides reforestation, garden landscaping, and garden maintenance services. 
      Your job is to assist users with consultations about the company's services.

      Here is the company's portfolio information:
      ${portfolioDataString}

      Here are the project details and services provided by the company:
      ${projectDataString}

      ${contextPrompt}\nUser: ${userPrompt}\nAI:
    `;

      // Generate the AI response
      const result = await model.generateContent(fullPrompt);
      const response = result.response;
      return response.text();
    } catch (error) {
      throw new Error("Error generating response: " + error.message);
    }
  };

  // Handle form submission to generate response
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent submission if input is empty
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      // Generate AI response using the prompt and history
      const aiResponse = await generateResponse(prompt, history);

      // Create a new history item
      const newHistoryItem = {
        id: Date.now(),
        prompt,
        response: aiResponse,
        timestamp: new Date().toISOString(),
      };

      // Update the history state and save it
      const newHistory = [newHistoryItem, ...history];
      saveHistory(newHistory);

      // Clear the input prompt
      setPrompt("");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Delete a specific history item by ID
  const deleteHistoryItem = (id) => {
    const newHistory = history.filter((item) => item.id !== id);
    saveHistory(newHistory);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-blue shadow-none">
      <div className="w-full max-w-4xl mx-auto mt-10 p-4 h-screen flex flex-col">
        <div className="bg-gray-blue rounded-md flex-1 overflow-y-auto">
          {/* Header section */}
          <div className="p-6 border rounded-t-md bg-main-green border-gray-200">
            <h2 className="text-2xl text-center font-bold text-second-cream">
              AI Assistant For Consultation
            </h2>
          </div>

          {/* Main content section */}
          <div className="p-6 bg-white-news flex-1 flex flex-col">
            {/* Display error message if any */}
            {error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded-md">
                {error}
              </div>
            )}

            {/* User input form */}
            <form onSubmit={handleSubmit} className="mb-6 flex-shrink-0">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Ask me anything..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-2 border rounded-md"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2 bg-dark-orange text-main-black font-semibold rounded-md"
                >
                  {isLoading ? "Generating..." : "Ask Greenly"}
                </button>
              </div>
            </form>

            {/* Conversation history */}
            <div className="flex-1 overflow-y-auto">
              <h3 className="text-lg font-semibold text-main-green mb-4">
                Conversation History
              </h3>
              <div className="space-y-4 max-h-full pr-2">
                {history.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg p-4 border">
                    {/* Display user prompt and AI response */}
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-medium">{item.prompt}</p>
                      {/* Button to delete a specific history item */}
                      <button
                        onClick={() => deleteHistoryItem(item.id)}
                        className="text-sm text-red-600"
                      >
                        Delete
                      </button>
                    </div>
                    <ReactMarkdown className="text-sm">
                      {item.response}
                    </ReactMarkdown>
                    <p className="text-xs">
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
