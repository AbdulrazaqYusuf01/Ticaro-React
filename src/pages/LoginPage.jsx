import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Toast from "../components/common/Toast";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);
  const { login } = useAuth();

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (email && !/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Invalid email format";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (email === "demo@feMentor.com" && password === "!abdul.tsx") {
      login({ email, name: "Demo User" });
      setToast({ message: "Login successful!", type: "success" });
      setTimeout(() => (window.location.hash = "#/dashboard"), 1000);
    } else {
      setToast({
        message: "Invalid credentials. Try demo@feMentor.com / !abdul.tsx",
        type: "error",
      });
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-50">
      <Header />
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}

      <div className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-600 mb-8">Sign in to your account</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((prev) => ({ ...prev, email: "" }));
                }}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                placeholder="demo@ticaro.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors((prev) => ({ ...prev, password: "" }));
                }}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                placeholder="demo123"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center text-gray-600">
            Don't have an account?{" "}
            <a href="#/auth/signup" className="text-indigo-600 hover:underline">
              Sign up
            </a>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Demo Credentials:</strong>
            </p>
            <p className="text-sm text-gray-600">Email: demo@feMentor.com</p>
            <p className="text-sm text-gray-600">Password: !abdul.tsx</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;
