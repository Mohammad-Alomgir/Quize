import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { firebase } from "../firebase";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    const auth = getAuth(firebase);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName(null);
      }
    });

    return unsubscribe;
  },[]);

  const signUp = (email, password, name) => {
    const auth = getAuth(firebase);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        return updateProfile(auth.currentUser, {
          displayName: name,
        });
      })
      .then(() => {
        setUserName(auth.currentUser.displayName);
        navigate("/login");
      })
      .catch((err) => {
        setError(err.message);
      });
    // await createUserWithEmailAndPassword(auth, email, password)

    // await updateProfile(auth.currentUser, {
    //   displayName: name,
    // });
  };
  const signIn = async (email, password) => {
    try {
      const auth = getAuth(firebase);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      if(err.code === 'auth/invalid-password'){
        setError('Invalid password')
      }else if(err.code === 'auth/invalid-email'){
        setError('Invalid Email Address')
      }else{
        setError(err.message)
      }
    }
  };
  const signOut = async () => {
    try{
      const auth = getAuth(firebase);
      await signOut(auth);
      setUserName('')
      navigate('/login')
    }catch(err){
      setError(err.code)
    }
  }
  const value = {
    signUp,
    signIn,
    signOut,
    userName,
    error
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
