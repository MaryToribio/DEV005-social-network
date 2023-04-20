// aqui exportaras las funciones que necesites
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js';

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

const auth = getAuth();

const registerUser = (email, password) => {
  console.log('datos: ', email, password);

  return createUserWithEmailAndPassword(auth, email, password);
};

/* registerUser(email, password)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  }); */

//  registrarRedSocial('caro@yopmail.com', 'maria123')

const idemail = document.querySelector('.inputInsertCorreo');
const idpassword = document.querySelector('.inputInsertPassword');
const eventButton = document.querySelector('.buttonRegister');

eventButton.addEventListener('click', () => {
  registerUser(idemail.value, idpassword.value)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });

  console.log('console1', idemail.value);
  console.log('console1', idpassword.value);
});

