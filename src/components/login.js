import { validateUserAndPasswordFireBase, googleProvider, signInWithPopupGoogle } from '../lib/index';

function login(navigateTo) {
  const containerLogin = document.createElement('section');
  containerLogin.classList.add('containerLogin');

  /* Seccion izquierdo  */
  const divLeft = document.createElement('div');
  divLeft.classList.add('divLeft');
  divLeft.id = ('divLeft');

  // imagen de fondo del lado izquierdo
  const imgLogin = document.createElement('img');
  imgLogin.src = './img/img3.png';
  imgLogin.alt = 'Es una hija que muestra una aplicacion a su padre en un movil';
  imgLogin.classList.add('imgLogin');
  // divLeft.append(imgLogin);

  // nombre escrito en letras
  const divSocialNetword = document.createElement('div');
  divSocialNetword.classList.add('divSocialNetword');
  const spanSocialNetword = document.createElement('span');
  spanSocialNetword.textContent = 'Senior Face';
  divSocialNetword.append(spanSocialNetword);
  // divLeft.append(divSocialNetword);

  divLeft.append(imgLogin, divSocialNetword);

  // creacion del contenedor derecho
  const divRight = document.createElement('div');
  divRight.classList.add('divRight');

  // titulo de iniciar secion
  const divTitleLogin = document.createElement('li');
  divTitleLogin.classList.add('divTitleLogin');
  const h2Login = document.createElement('span');
  h2Login.classList.add('spanLogin');
  h2Login.textContent = 'INICIAR SESION';
  divTitleLogin.append(h2Login);

  // Creación de formulario en el contenedor derecho
  const formLogin = document.createElement('form');
  formLogin.classList.add('formLogin');
  divRight.append(formLogin);

  // Input para insertar correo
  const listInputCorreo = document.createElement('li');
  listInputCorreo.classList.add('listInput');
  const labelCorreo = document.createElement('label');
  labelCorreo.textContent = 'INSERTAR CORREO ELECTRÓNICO';
  const inputInsertCorreo = document.createElement('input');
  inputInsertCorreo.name = 'correo';
  inputInsertCorreo.placeholder = 'another@example.com';
  const errorMessageEmail = document.createElement('small');
  errorMessageEmail.textContent = '';
  listInputCorreo.append(labelCorreo, inputInsertCorreo, errorMessageEmail);

  // Input para insertar Password

  const listInputPassword = document.createElement('li');
  listInputPassword.classList.add('listInput');
  const labelPassword = document.createElement('label');
  labelPassword.textContent = 'INSERTAR CONTRASEÑA';
  const inputInsertPassword = document.createElement('input');
  inputInsertPassword.type = 'password';
  inputInsertPassword.name = 'password';
  inputInsertPassword.placeholder = 'mínimo 6 dígitos';
  const errorMessagePassword = document.createElement('small');
  errorMessagePassword.textContent = '';
  listInputPassword.append(labelPassword, inputInsertPassword, errorMessagePassword);

  // Boton de "iniciar secion"
  const listButtonLogin = document.createElement('li');
  listButtonLogin.classList.add('listButtonLogin');
  const buttonLogin = document.createElement('button');
  buttonLogin.classList.add('buttonLogin');
  buttonLogin.textContent = 'INICIAR SESION';
  buttonLogin.type = 'submit';
  listButtonLogin.append(buttonLogin);

  // pregunta

  const listAsk = document.createElement('li');
  const smallAsk = document.createElement('small');
  smallAsk.classList.add('smallAsk');
  smallAsk.textContent = '¿No tienes una cuenta registrada?';
  listAsk.append(smallAsk);

  // Boton de "Registrar con Google"
  const listButtonLoginGoogle = document.createElement('li');
  listButtonLoginGoogle.classList.add('listButtonLoginGoogle');
  const buttonLoginGoogle = document.createElement('button');
  buttonLoginGoogle.classList.add('buttonLoginGoogle');
  buttonLoginGoogle.textContent = 'Inicia con Google';
  listButtonLoginGoogle.append(buttonLoginGoogle);
  const logoGoogle = document.createElement('img');
  logoGoogle.src = './img/logoGoogle.png';
  buttonLoginGoogle.append(logoGoogle);

  // Input de linea separadora
  const containerLineDivide = document.createElement('div');
  containerLineDivide.classList.add('containerLineDivide');
  const lineDivide = document.createElement('div');
  lineDivide.classList.add('lineDivide');
  const circle = document.createElement('div');
  circle.classList.add('circle');
  lineDivide.append(circle);
  containerLineDivide.append(lineDivide);

  // Boton para Registrarse
  const listButtonToRegister = document.createElement('li');
  listButtonToRegister.classList.add('listButtonToRegister');
  const buttonToRegister = document.createElement('button');
  buttonToRegister.classList.add('buttonToRegister');
  buttonToRegister.textContent = 'REGÍSTRATE';
  listButtonToRegister.append(buttonToRegister);

  // Insertar listas en formulario "formLogin"

  formLogin.append(
    divTitleLogin,
    listInputCorreo,
    listInputPassword,
    listButtonLogin,
    listButtonLoginGoogle,
    containerLineDivide,
    listButtonToRegister,
  );

  // icono de la parte superior
  const divLogo = document.createElement('div');
  divLogo.classList.add('divLogo');
  const imgLogo = document.createElement('img');
  imgLogo.src = './img/iconoLogin.png';
  divLogo.append(imgLogo);

  divRight.append(divLogo, formLogin);

  containerLogin.append(divLeft, divRight);

  // -----------------------------------------------------------------------------------------------
  // -----------------------------------------------------------------------------------------------
  listButtonToRegister.addEventListener('click', () => navigateTo('/register'));
  // Validación de inputs

  const listInputs = [inputInsertCorreo, inputInsertPassword];
  console.log('prueba 0', listInputs);

  // Validación de input vacio - funcion para mostrar correcto
  function errorInput(input, messageError) {
    const listInput = input.parentElement;
    listInput.className = 'listInput error';
    const small = listInput.querySelector('small');
    listInput.classList.add('error');
    small.innerText = messageError;
  }

  function succesInput(input) {
    const listInput = input.parentElement;
    listInput.classList.add('success');
    listInput.querySelector('small').innerText = '';
  }
  function cleanInputs(input) {
    const listInput = input.parentElement;
    listInput.classList.remove('success');
    listInput.classList.remove('error');
  }

  // Funcion de validar direccionar a campos
  function validInputs(e) {
    console.log(e.target.name);
    if (e.target.name === 'correo') {
      const validCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

      if (inputInsertCorreo.value === '') {
        errorInput(inputInsertCorreo, 'El campo está vacío');
        console.log('nosehixo');
      } else if (validCorreo.test(inputInsertCorreo.value) === false) {
        console.log('nosepaso');
        errorInput(inputInsertCorreo, 'El campo debe ser llenado correctamente');
      } else {
        console.log('done', 'done');
        succesInput(inputInsertCorreo);
      }
    }
    // errorInput(inputInsertCorreo, 'El campo debe ser llenado');
    if (e.target.name === 'password') {
      const validPassword = /^.{6,12}$/;
      if (inputInsertPassword.value === '') {
        errorInput(inputInsertPassword, 'El campo debe contener al menos 6 dígitos');
      } else if (validPassword.test(inputInsertPassword.value) === true) {
        succesInput(inputInsertPassword);
      }
    }
    return true;
  }

  // Evento para cada input
  listInputs.forEach((input) => {
    input.addEventListener('keyup', validInputs);
    input.addEventListener('blur', validInputs);
  });

  // Funciones de firebase
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const valueCorreo = inputInsertCorreo.value.trim();
    const valuePassword = inputInsertPassword.value.trim();
    const validCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const validPassword = /^.{6,12}$/;

    if (validCorreo.test(inputInsertCorreo.value) === false
     && validPassword.test(inputInsertPassword.value) === false) {
      errorInput(inputInsertCorreo, 'Los campos aún no han sido llenados');
      errorInput(inputInsertPassword, 'Los campos aún no han sido llenados');
    } else {
      console.log('probandofirebase');

      validateUserAndPasswordFireBase(valueCorreo, valuePassword)
        .then((result) => {
          // Signed in
          navigateTo('/home');
          console.log(result);
        })
        .catch((err) => {
          console.error(err);
          const emailInvalid = document.createElement('div');
          emailInvalid.classList.add('emailInvalid');
          const messageInvalid = document.createElement('span');
          messageInvalid.textContent = 'Correo no registrado';
          emailInvalid.append(messageInvalid);
          formLogin.append(emailInvalid);
          setTimeout(() => { formLogin.removeChild(emailInvalid); }, 4000);
        });
    }
    formLogin.reset();
    cleanInputs(inputInsertCorreo);
    cleanInputs(inputInsertPassword);
    console.log('selogro');
  });

  buttonLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    navigateTo('/register');
  });

  listButtonLoginGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    signInWithPopupGoogle(googleProvider)
      .then(() => {
      // Signed in
        navigateTo('/home');
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return containerLogin;
}
export default login;
