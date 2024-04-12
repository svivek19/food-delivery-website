import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { doc, setDoc, getFirestore, getDoc } from "firebase/firestore";
import SigninSignup from "../Auth/SignupSignIn";
import UserProfileForm from "../userProfile.jsx/UserProfileForm";
import AvatarUploader from "../userProfile.jsx/AvatarUploader";

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
            avatarURL: userAuth.photoURL,
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
    <>
      {user ? (
        <div className="mt-40">
          <h2 className="text-2xl font-bold mb-4">Welcome, {user.email}</h2>
          <AvatarUploader user={user} />
          <UserProfileForm user={user} updateUserProfile={updateUserProfile} />
          <button
            className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => auth.signOut()}
          >
            Sign out
          </button>
        </div>
      ) : (
        <SigninSignup />
      )}
    </>
  );
};

export default Auth;
