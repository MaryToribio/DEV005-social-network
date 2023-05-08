// aqui exportaras las funciones que necesites (se borro los modulos que no se usan)
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js';

import {
  getFirestore, collection, query, orderBy, onSnapshot, addDoc, doc, deleteDoc, updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js';
// import register from '../components/register';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC1Gx5BJ_fXr3rCiX-yROL_yng-dwdRmLk',
  authDomain: 'seniorface-socialnetwork.firebaseapp.com',
  projectId: 'seniorface-socialnetwork',
  storageBucket: 'seniorface-socialnetwork.appspot.com',
  messagingSenderId: '12593288068',
  appId: '1:12593288068:web:f501c31c4928f03bc143d1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log('probandoString', app);

export const auth = getAuth(app);

// Función de promesa para crear cuenta
export const registerUser = (email, password) => {
  console.log('datos1: ', email, password);
  return createUserWithEmailAndPassword(auth, email, password);
};

// Función de promesa para registrar con Google
export const googleProvider = new GoogleAuthProvider();
export const signInWithPopupGoogle = (provider) => signInWithPopup(auth, provider);

// Función para iniciar Sesión

export function validateUserAndPasswordFireBase(user, password) {
  return signInWithEmailAndPassword(auth, user, password);
}
console.log('promesa', signInWithEmailAndPassword);

// funciones para publicar

const db = getFirestore();

export const createCollection = (newPost) => {
  addDoc(collection(db, 'post'), {
    newPost,
    user: auth.currentUser.email,
    dateCreated: new Date(),
    like: 0,
  });
  console.log(auth.currentUser.email);
};

// se crea deletecollection para elimminar los comentarios
export const deleteCollection = (postID) => {
  deleteDoc(doc(db, 'post', postID));
};

// se remplaza getdoc , por el query y se adiciono orderBy (para ordedar porfecha
// y muestro lo ultimo)
const getPost = query(collection(db, 'post'), orderBy('dateCreated', 'desc'));

export const onGetPost = (callback) => onSnapshot(getPost, callback);

// para editar el post

export const updatePost = (postID, newPostValue) => {
  updateDoc(postID, { newPost: newPostValue });
};
