import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { doc, setDoc, getFirestore, getDoc } from "firebase/firestore";
import SigninSignup from "../Auth/SignupSignIn";
import UserProfileForm from "../userProfile.jsx/UserProfileForm";
import AvatarUploader from "../userProfile.jsx/AvatarUploader";
import { Link } from "react-router-dom";

const Auth = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      setUser(userAuth);
      if (userAuth) {
        const userDocRef = doc(db, "users", userAuth.uid);
        const userDocSnap = await getDoc(userDocRef);
        if (!userDocSnap.exists()) {
          await setDoc(userDocRef, {
            email: userAuth.email,
            displayName: userAuth.displayName,
          });
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth, db]);

  const updateUserProfile = async (newProfileData) => {
    try {
      await updateProfile(auth.currentUser, newProfileData);
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, newProfileData, { merge: true });
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div>
      <div className="w-11/12 md:w-5/6 mx-auto text-center">
        {user ? (
          <div className="mt-28">
            <h2 className="text-4xl font-semibold text-[#52321b] ">
              User Informations
            </h2>
            <div>
              <AvatarUploader user={user} />
              <UserProfileForm
                user={user}
                updateUserProfile={updateUserProfile}
              />
            </div>
            <button
              className="my-8 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => auth.signOut()}
            >
              Sign out
            </button>
          </div>
        ) : (
          <SigninSignup />
        )}
      </div>

      <div className="w-11/12 md:w-5/6 mx-auto text-center">
        <Link to={"/admin"}>admin login</Link>
      </div>
    </div>
  );
};

export default Auth;
