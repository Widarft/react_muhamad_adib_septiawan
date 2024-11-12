import React, { useState, useRef } from "react";
import { useNavigationUtils } from "../../hook/navigationUtils";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { navigateTo } = useNavigationUtils();

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    const regex = /^.{3,}$/;
    setFirstName(value);

    if (!regex.test(value)) {
      setError((prev) => ({
        ...prev,
        firstName: "First Name must be at least 3 characters long.",
      }));
    } else {
      setError((prev) => ({ ...prev, firstName: "" }));
    }
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;
    const regex = /^.{3,}$/;
    setLastName(value);

    if (!regex.test(value)) {
      setError((prev) => ({
        ...prev,
        lastName: "Last Name must be at least 3 characters long.",
      }));
    } else {
      setError((prev) => ({ ...prev, lastName: "" }));
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(value);

    if (!regex.test(value)) {
      setError((prev) => ({
        ...prev,
        email: "Please enter a valid email address.",
      }));
    } else {
      setError((prev) => ({ ...prev, email: "" }));
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    const regex = /^.{8,}$/;
    setPassword(value);

    if (!regex.test(value)) {
      setError((prev) => ({
        ...prev,
        password: "Password must be at least 8 characters long.",
      }));
    } else {
      setError((prev) => ({ ...prev, password: "" }));
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);

    if (value !== password) {
      setError((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match.",
      }));
    } else {
      setError((prev) => ({ ...prev, confirmPassword: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const errors = {};
    if (!firstName) {
      errors.firstName = "Please enter your first name.";
      setError(errors);
      firstNameRef.current.focus();
      return;
    }

    if (!lastName) {
      errors.lastName = "Please enter your last name.";
      setError(errors);
      lastNameRef.current.focus();
      return;
    }

    if (!email) {
      errors.email = "Please enter a valid email address.";
      setError(errors);
      emailRef.current.focus();
      return;
    }

    if (!password) {
      errors.password = "Please enter a password.";
      setError(errors);
      passwordRef.current.focus();
      return;
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
      setError(errors);
      confirmPasswordRef.current.focus();
      return;
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
    } else {
      const userData = {
        firstName,
        lastName,
        username,
        email,
        password,
      };

      localStorage.setItem("userData", JSON.stringify(userData));
      alert("Registration successful!");

      setFirstName("");
      setLastName("");
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setError({});
      setIsSubmitted(false);

      navigateTo("/login");
    }
  };

  return (
    <form
      className="grid grid-cols-1 gap-y-6 pl-10 pr-10"
      onSubmit={handleSubmit}
    >
      <div className="col-span-1">
        <label htmlFor="firstName" className="block text-base font-medium mb-1">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
          ref={firstNameRef}
          placeholder="Enter your first name"
          className={`w-[282px] px-4 py-2 mb-1 border rounded-md focus:ring focus:ring-blue-500 focus:outline-none ${
            error.firstName && isSubmitted
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {error.firstName && (
          <p className="text-sm mt-1 text-red-500">{error.firstName}</p>
        )}
      </div>

      <div className="col-span-1">
        <label htmlFor="lastName" className="block text-base font-medium mb-1">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleLastNameChange}
          ref={lastNameRef}
          placeholder="Enter your last name"
          className={`w-[282px] px-4 py-2 mb-1 border rounded-md focus:ring focus:ring-blue-500 focus:outline-none ${
            error.lastName && isSubmitted ? "border-red-500" : "border-gray-300"
          }`}
        />
        {error.lastName && (
          <p className="text-sm mt-1 text-red-500">{error.lastName}</p>
        )}
      </div>

      <div className="col-span-1">
        <label htmlFor="username" className="block text-base font-medium mb-1">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter your username"
          className="w-[282px] px-4 py-2 mb-1 border rounded-md focus:ring focus:ring-blue-500 focus:outline-none border-gray-300"
        />
      </div>

      <div className="col-span-1">
        <label htmlFor="email" className="block text-base font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          ref={emailRef}
          placeholder="Enter your email"
          className={`w-[282px] px-4 py-2 mb-1 border rounded-md focus:ring focus:ring-blue-500 focus:outline-none ${
            error.email && isSubmitted ? "border-red-500" : "border-gray-300"
          }`}
        />
        {error.email && (
          <p className="text-sm mt-1 text-red-500">{error.email}</p>
        )}
      </div>

      <div className="col-span-1">
        <label htmlFor="password" className="block text-base font-medium mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          ref={passwordRef}
          placeholder="Enter your password"
          className={`w-[282px] px-4 py-2 mb-1 border rounded-md focus:ring focus:ring-blue-500 focus:outline-none ${
            error.password && isSubmitted ? "border-red-500" : "border-gray-300"
          }`}
        />
        {error.password && (
          <p className="text-sm mt-1 text-red-500">{error.password}</p>
        )}
      </div>

      <div className="col-span-1">
        <label
          htmlFor="confirmPassword"
          className="block text-base font-medium mb-1"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          ref={confirmPasswordRef}
          placeholder="Confirm your password"
          className={`w-[282px] px-4 py-2 mb-1 border rounded-md focus:ring focus:ring-blue-500 focus:outline-none ${
            error.confirmPassword && isSubmitted
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {error.confirmPassword && (
          <p className="text-sm mt-1 text-red-500">{error.confirmPassword}</p>
        )}
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-4 py-2 mt-2 w-40 bg-bs-blue text-white font-medium rounded-md hover:bg-blue-hover-btn"
        >
          Register
        </button>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <span
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={() => navigateTo("/login")}
          >
            Login here
          </span>
        </p>
      </div>
    </form>
  );
};

export default RegistrationForm;
