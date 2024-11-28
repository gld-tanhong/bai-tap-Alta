import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { AppDispatch } from "./store";
import { registerSuccess, login, logout } from "./authSlice";
import type { Sign, Login, User } from "../types/todo";
import app from "../firebase";


export const registerWithEmail = (formData: Sign) => async (dispatch: AppDispatch) => {

    const auth = getAuth(app)
    try {
      console.log('form Data', formData)
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
      
      const user = userCredential.user;
      
      await updateProfile(user, {
        displayName: formData.displayName,
      });
      console.log('user fire base', user)

      const userPayload: User = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName
      }
  
      dispatch(registerSuccess(userPayload));
      console.log("Register successful!");
      return true
    } catch (error) {
      console.error("Registration failed: ", error);
    }
};

export const loginWithEmail = (formData: Login) => async (dispatch: AppDispatch) => {
    const auth = getAuth(app)  

    try {
    const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
    const user = userCredential.user;
    dispatch(login({ uid: user.uid, email: user.email, displayName: user.displayName }));
    return true
  } catch (error) {
    console.error("Login failed: ", error);
  }
};

export const logoutUser = () => async (dispatch: AppDispatch) => {
  const auth = getAuth(app)

  try {
    await signOut(auth);
    dispatch(logout());
    return true
  } catch (error) {
    console.error("Logout failed: ", error);
  }
};
