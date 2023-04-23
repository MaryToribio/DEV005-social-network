import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js';
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
const auth = getAuth(app);

function validateUserAndPasswordFireBase(navigateTo, user, password) {
  signInWithEmailAndPassword(auth, user, password)
    .then(() => {
    // Signed in
      navigateTo('/seniorFace');
    })
    .catch((error) => {
      console.log(error);
      const errorCode = error.code;
      if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
        alert('Usuario no encontrado verificar la informacion ingresada');
      } else {
        navigateTo('/error');
      }
    });

}

function login(navigateTo) {
  const root = document.getElementById('root');
  root.innerHTML = '';

  const section = document.createElement('section');
  section.classList.add('contenedor');
  const contendorLr = document.createElement('div');
  contendorLr.classList.add('contenedorLr');

  /* izquierda   */
  const divLeft = document.createElement('div');
  divLeft.classList.add('divLeft');
  divLeft.id = ('divLeft');
  const imgLogin = document.createElement('img');
  const divSocialNetword = document.createElement('div');
  divSocialNetword.classList.add('divSocialNetword');
  const spanSocialNetword = document.createElement('span');
  spanSocialNetword.textContent = 'Senior Face';
  divSocialNetword.append(spanSocialNetword);
  const containerDiv = document.createElement('div');
  containerDiv.classList.add('containerDiv');
  /* derecha   */

  const divRight = document.createElement('div');
  divRight.classList.add('divRaight');
  const loginTitle = document.createElement('h2');
  loginTitle.classList.add('loginTitle');
  const userName = document.createElement('span');
  const userPassword = document.createElement('span');
  const userAsk = document.createElement('span');
  userAsk.classList.add('askP');
  const inputUser = document.createElement('input');
  inputUser.classList.add('inputClassLogin');
  const inputPassword = document.createElement('input');
  inputPassword.classList.add('inputClassLogin');
  const buttonLogin = document.createElement('button');
  buttonLogin.classList.add('buttonClassLogin');
  const buttonRegister = document.createElement('button');
  buttonRegister.classList.add('buttonClassLogin');
  const divUser = document.createElement('div');
  divUser.classList.add('loginDiv');
  const divPassword = document.createElement('div');
  divPassword.classList.add('loginDiv');
  const divRegister = document.createElement('div');
  divRegister.classList.add('buttonClass');
  const divLogin = document.createElement('div');
  divLogin.classList.add('buttonClass');
  const divAsk = document.createElement('div');
  divAsk.classList.add('divAsk');
  const divLogo = document.createElement('div');
  divLogo.classList.add('divLogo');
  const imgLogo = document.createElement('img');
  imgLogo.src = './img/iconoLogin.png';
  divLogo.append(imgLogo);

  root.append(section);
  section.append(contendorLr);

  contendorLr.append(divLeft, divRight);
  loginTitle.textContent = 'INICIAR SESION';
  divRight.append(loginTitle, divLogo, containerDiv);
  containerDiv.append(divUser, divPassword, divLogin, divAsk, divRegister);

  userName.textContent = 'CORREO';
  divUser.append(userName, inputUser);

  userPassword.textContent = 'CONTRASEÑA';
  divPassword.append(userPassword, inputPassword);

  buttonLogin.textContent = 'Iniciar Sesión';
  divLogin.append(buttonLogin);

  userAsk.textContent = '¿No tienes una cuenta registrada?';
  divAsk.append(userAsk);

  buttonRegister.textContent = 'Regístrate';
  divRegister.append(buttonRegister);

  divLeft.append(divSocialNetword);

  imgLogin.src = './img/img3.png';
  imgLogin.classList.add('imgLogin');
  imgLogin.alt = 'Es una hija que muestra una aplicacion a su padre en un movil';
  divLeft.append(imgLogin);

  // creacion de eventos
  buttonRegister.addEventListener('click', () => {
    navigateTo('/register');
  });

  buttonLogin.addEventListener('click', () => {
    const user = inputUser.value;
    const password = inputPassword.value;
    validateUserAndPasswordFireBase(navigateTo, user, password);
  });

  return root;
}
export default login;
