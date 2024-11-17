import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setIsAuthenticated, setIsAdmin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  // Effect to check if the user is already logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const isAdmin = localStorage.getItem("isAdmin");

    // Redirect to homepage if already logged in as an admin
    if (isLoggedIn && isAdmin) {
      navigate("/");
    }
    // Show an alert and restrict access if not an admin
    else if (isLoggedIn && !isAdmin) {
      alert("You do not have permission to access this page.");
      // Remove login data from local storage and navigate to restricted page
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("isAdmin");
      navigate("/restricted");
    }
  }, [navigate]);

  // Function to validate the form inputs
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate email format
    if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    // Validate password length
    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }
    setError(newErrors);
    // Return true if no errors, false otherwise
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Mark form as submitted

    // Proceed if the form is valid
    if (validateForm()) {
      // Hardcoded admin credentials for demo purposes
      const adminEmail = "greenscapeperusahaan@gmail.com";
      const adminPassword = "greenhijau12";

      // Check if entered email and password match the admin credentials
      if (email === adminEmail && password === adminPassword) {
        // Set authentication states
        setIsAuthenticated(true);
        setIsAdmin(true);
        // Save login status in local storage
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("isAdmin", "true");
        alert("Login successful!");
        navigate("/admin"); // Navigate to the admin dashboard
      } else {
        // Show error if credentials are incorrect
        setError({ form: "Email or password is incorrect." });
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-blue">
      <div className="bg-white p-10 rounded-lg shadow-lg w-[350px]">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-center mb-6">Login Admin</h2>

        {/* Login form */}
        <form className="grid grid-cols-1 gap-y-6" onSubmit={handleSubmit}>
          {/* Email input field */}
          <div className="col-span-1">
            <label htmlFor="email" className="block text-base font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={`w-full px-4 py-2 mb-1 border rounded-md focus:ring focus:ring-blue-500 focus:outline-none ${
                error.email && isSubmitted
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {/* Display email error message */}
            {error.email && (
              <p className="text-sm mt-1 text-red-500">{error.email}</p>
            )}
          </div>

          {/* Password input field */}
          <div className="col-span-1">
            <label
              htmlFor="password"
              className="block text-base font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className={`w-full px-4 py-2 mb-1 border rounded-md focus:ring focus:ring-main-green focus:outline-none ${
                error.password && isSubmitted
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {/* Display password error message */}
            {error.password && (
              <p className="text-sm mt-1 text-red-500">{error.password}</p>
            )}
          </div>

          {/* Display form-level error message */}
          {error.form && (
            <p className="text-sm mt-1 text-red-500 text-center">
              {error.form}
            </p>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="px-4 py-2 mt-2 w-full bg-main-green text-white font-medium rounded-md hover:bg-green-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
