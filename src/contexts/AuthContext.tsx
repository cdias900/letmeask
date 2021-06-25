import {
  createContext, FC, useEffect, useState,
} from 'react';

import { auth, firebase } from '../services/firebase';

type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);

const AuthContextProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User>();

  const handleUserUpdate = (u: firebase.User | null) => {
    if (u) {
      const { displayName, photoURL, uid } = u;

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => handleUserUpdate(u));
    return () => { unsubscribe(); };
  }, []);

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const res = await auth.signInWithPopup(provider);
    handleUserUpdate(res.user);
  };

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
