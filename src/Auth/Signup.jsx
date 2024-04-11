import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const auth = getAuth();

  const handleSignUp = () => {
    setError(null);
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoading(false);
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
        setEmail("");
        setPassword("");
      });
  };

  return (
    <div className="my-40">
      <h2>Sign Up Page</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      {error && <p>{error}</p>}
      <button onClick={handleSignUp} disabled={loading}>
        {loading ? "Loading..." : "Sign Up"}
      </button>
    </div>
  );
};

export default Signup;
