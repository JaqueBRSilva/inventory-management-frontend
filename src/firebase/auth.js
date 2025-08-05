import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import app from "./app";

const auth = getAuth(app);

async function firebaseSignup(email, password) {
  await createUserWithEmailAndPassword(auth, email, password);
}

async function firebaseLogin(email, password) {
  await signInWithEmailAndPassword(auth, email, password);
}

async function firebaseLogout() {
  await signOut(auth);
}

export { firebaseLogin, firebaseLogout, firebaseSignup };