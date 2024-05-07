import { useEffect, useState } from "react";
import { signInWithPopup } from "firebase/auth";

import { auth, provider } from "./firebase";

const Header = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  const onSignInClick = () => {
    signInWithPopup(auth, provider);
  };

  const onSignOut = () => {
    auth.signOut();
  };

  return (
    <header className="px-5 flex justify-end cursor-pointer hover:underline">
      {currentUser ? (
        <button onClick={onSignOut}>{currentUser.displayName}</button>
      ) : (
        <button onClick={onSignInClick}>Sign In</button>
      )}
    </header>
  );
};

export default Header;
