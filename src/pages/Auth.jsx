import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SigninSignup from "../Auth/SignupSignIn";

const Auth = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  return (
    <>
      {user ? (
        <div className="mt-40">
          <h2>Welcome, {user.email}</h2>
          <button onClick={() => auth.signOut()}>Sign out</button>
        </div>
      ) : (
        <SigninSignup />
      )}
    </>
  );
};

export default Auth;
