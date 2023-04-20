
function login(navigateTo) {
  const root = document.getElementById('root');
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

function login() {
  const root = document.getElementById('root');
  const section = document.createElement('section');
  const divRight = document.createElement('div');
  divRight.classList.add('secctionDiv');
  divRight.id = ('divRight');
  const loginTitle = document.createElement('h2');
  const userName = document.createElement('span');
  const userPassword = document.createElement('span');
  const userAsk = document.createElement('span');
  const inputUser = document.createElement('input');
  const inputPassword = document.createElement('input');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');

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
  buttonRegister.addEventListener('click', () => { navigateTo('/register'); });


  divRegister.classList.add('loginDiv');
  const divLogin = document.createElement('div');
  divLogin.classList.add('loginDiv');
  const divAsk = document.createElement('div');
  divAsk.classList.add('loginDiv');
  /* izquierda   */
  const divLeft = document.createElement('div');
  divLeft.classList.add('secctionDiv');
  divLeft.id = ('divLeft');
  const imgLogin = document.createElement('img');
  const nameSocialNetwrk = document.createElement('span');
  nameSocialNetwrk.classList.add('spanSocialNetwrk');
  const containerDiv = document.createElement('div');
  containerDiv.classList.add('containerDiv');

  root.append(divLeft, divRight);
  section.append(divLeft);
  section.append(divRight);
  loginTitle.textContent = 'LOGIN';
  divRight.append(loginTitle);
  divRight.append(containerDiv);
  containerDiv.append(divUser);
  containerDiv.append(divPassword);
  containerDiv.append(divAsk);
  containerDiv.append(divRegister);
  containerDiv.append(divLogin);

  divRight.append(divUser);
  userName.textContent = 'USER NAME';
  divUser.append(userName);
  divUser.append(inputUser);

  divRight.append(divPassword);
  userPassword.textContent = 'PASSWORD';
  divPassword.append(userPassword);
  divPassword.append(inputPassword);

  divRight.append(divLogin);
  buttonLogin.textContent = 'LOGIN';
  divLogin.append(buttonLogin);

  divRight.append(divAsk);
  userAsk.textContent = 'YOU DONT HAVE USERNAME AND PASSWORD ';
  divAsk.append(userAsk);

  divRight.append(divRegister);
  buttonRegister.textContent = 'REGISTER';
  divRegister.append(buttonRegister);

  nameSocialNetwrk.textContent = 'SENIOR FACE';
  divLeft.append(nameSocialNetwrk);

  imgLogin.src = '../img/seniorFaceLogin.png';
  imgLogin.classList.add('imgLogin');
  imgLogin.alt = 'Es una imagen de una hija que muestra una aplicacion a su padre';
  divLeft.append(imgLogin);


  return root;
}

export default login;
