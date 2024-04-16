import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "../App.css";

const SigninSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleAuth = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        setLoading(false);
        const user = userCredential.user;
        navigate("/");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        setLoading(false);
        navigate("/");
      }
    } catch (err) {
      setLoading(false);
      setError(err.message);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#52321b]">
          {isSignUp ? "Sign Up" : "Sign In"} to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleAuth}>
          <div className="text-start">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-[#52321b]"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full bg-slate-100 px-2 outline-none rounded-md border-0 py-1.5 text-[#52321b] shadow-sm placeholder:text-[#bebab7] sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-[#52321b]"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full bg-slate-100 px-2 outline-none rounded-md border-0 py-1.5 text-[#52321b] shadow-sm placeholder:text-[#bebab7] sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="flex w-full justify-center rounded-md bg-[#52321b] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm "
            >
              {loading ? (
                <div className="text-xl animate-spin">
                  <AiOutlineLoading3Quarters />
                </div>
              ) : isSignUp ? (
                "Sign Up"
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          {isSignUp ? "Already have an account? " : "Not a member? "}
          <button
            className="font-semibold leading-6 text-[#52321b] focus:outline-none"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
    </div>
  );
};

export default SigninSignup;
