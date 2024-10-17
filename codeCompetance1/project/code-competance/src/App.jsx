import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import AboutUsPage from "./pages/AboutUsPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/hook/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<WelcomePage />} />

        {/* About Route */}
        <Route path="/about" element={<AboutUsPage />} />

        {/* Contact Route */}
        <Route path="/contact" element={<WelcomePage />} />

        {/* 404 Route for any unmatched paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
