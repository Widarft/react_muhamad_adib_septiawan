import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useNavigationUtils } from "../hook/navigationUtils";

const LoginForm = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const { navigateTo } = useNavigationUtils();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      navigate("/");
    }
  }, [navigate]);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (validateForm()) {
      const userData = JSON.parse(localStorage.getItem("userData"));

      if (
        userData &&
        userData.email === email &&
        userData.password === password
      ) {
        setIsAuthenticated(true);
        localStorage.setItem("isLoggedIn", "true");
        alert("Login successfully!");
        navigate("/");
      } else {
        setError({ form: "Email or password is incorrect." });
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-[350px]">
        <button onClick={() => navigateTo("/")}>
          <img src="/assets/img/home.png" alt="Home" className="w-8 h-8 mb-1" />
        </button>
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form className="grid grid-cols-1 gap-y-6" onSubmit={handleSubmit}>
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
            {error.email && (
              <p className="text-sm mt-1 text-red-500">{error.email}</p>
            )}
          </div>

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
              className={`w-full px-4 py-2 mb-1 border rounded-md focus:ring focus:ring-blue-500 focus:outline-none ${
                error.password && isSubmitted
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {error.password && (
              <p className="text-sm mt-1 text-red-500">{error.password}</p>
            )}
          </div>

          {error.form && (
            <p className="text-sm mt-1 text-red-500 text-center">
              {error.form}
            </p>
          )}

          <button
            type="submit"
            className="px-4 py-2 mt-2 w-full bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600"
          >
            Login
          </button>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <span
                className="text-blue-500 hover:underline cursor-pointer"
                onClick={() => navigate("/registration")}
              >
                Register here
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
