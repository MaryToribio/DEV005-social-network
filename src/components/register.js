import { registerUser, googleProvider, signInWithPopupGoogle } from '../lib/index';

export function register(navigateTo) {
  // Contenedor padre
  const containerSection = document.createElement('section');
  containerSection.classList.add('containerSection');

  // Creación de containerRight
  const containerRight = document.createElement('section');
  containerRight.classList.add('containerRight');
  const iconComeBack = document.createElement('i');
  iconComeBack.classList.add('fa-solid');
  iconComeBack.classList.add('fa-reply-all');
  const titleRegister = document.createElement('span');
  titleRegister.classList.add('titleRegister');
  titleRegister.textContent = 'Registrarse';
  const divTitleRegister = document.createElement('div');
  divTitleRegister.classList.add('divTitleRegister');
  divTitleRegister.append(titleRegister);

  // Creación de formulario
  const formRegister = document.createElement('form');
  formRegister.classList.add('formRegister');

  // Input para insertar correo
  const listInputCorreo = document.createElement('li');
  listInputCorreo.classList.add('listInput');
  const labelCorreo = document.createElement('label');
  labelCorreo.textContent = 'INSERTAR CORREO ELECTRÓNICO';
  const inputInsertCorreo = document.createElement('input');
  inputInsertCorreo.classList.add('inputInsertCorreo');
  inputInsertCorreo.name = 'correo';
  inputInsertCorreo.placeholder = 'another@example.com';
  const errorMessageEmail = document.createElement('span');
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
  inputInsertPassword.classList.add('inputInsertPassword');
  inputInsertPassword.placeholder = 'mínimo 6 dígitos';
  const errorMessagePassword = document.createElement('span');
  errorMessagePassword.textContent = '';
  listInputPassword.append(labelPassword, inputInsertPassword, errorMessagePassword);

  // Boton de "Registrar y guardar"
  const listButtonRegister = document.createElement('li');
  listButtonRegister.classList.add('listButtonRegister');
  const buttonRegister = document.createElement('button');
  buttonRegister.classList.add('buttonRegister');
  buttonRegister.textContent = 'Guardar y registrar';
  buttonRegister.type = 'submit';
  listButtonRegister.append(buttonRegister);

  // Boton de "Registrar con Google"
  const listButtonRegisterGoogle = document.createElement('li');
  listButtonRegisterGoogle.classList.add('listButtonRegisterGoogle');
  const buttonRegisterGoogle = document.createElement('button');
  buttonRegisterGoogle.classList.add('buttonRegisterGoogle');
  buttonRegisterGoogle.textContent = 'Regístrate con Google';
  listButtonRegisterGoogle.append(buttonRegisterGoogle);
  const logoGoogle = document.createElement('img');
  logoGoogle.src = './img/logoGoogle.png';
  buttonRegisterGoogle.append(logoGoogle);

  // Input de linea separadora
  const containerLineDivide = document.createElement('div');
  containerLineDivide.classList.add('containerLineDivide');
  const lineDivide = document.createElement('div');
  lineDivide.classList.add('lineDivide');
  const circle = document.createElement('div');
  circle.classList.add('circle');
  lineDivide.append(circle);
  containerLineDivide.append(lineDivide);

  // Insertar listas en formulario "formRegister"

  formRegister.append(
    divTitleRegister,
    listInputCorreo,
    listInputPassword,
    listButtonRegister,
    containerLineDivide,
    listButtonRegisterGoogle,
  );

  // Creación de containerLeft
  const containerLeft = document.createElement('section');
  containerLeft.classList.add('containerLeft');
  const divContainerPhrase = document.createElement('div');
  divContainerPhrase.classList.add('divContainerPhrase');
  const contentPhrase = document.createElement('span');
  contentPhrase.classList.add('contentPhrase');
  contentPhrase.textContent = 'Porque aún hay mucho más por contar y compartir';
  divContainerPhrase.append(contentPhrase);
  const imgSeniorFace = document.createElement('img');
  imgSeniorFace.classList.add('imgSeniorFace');
  imgSeniorFace.src = './img/SeniorFace2.png';
  const divTitleLogo = document.createElement('div');
  divTitleLogo.classList.add('divTitleLogo');
  const titleLogo = document.createElement('span');
  titleLogo.textContent = 'Senior Face';
  const divLogoRegister = document.createElement('div');
  divLogoRegister.classList.add('divLogoRegister');
  const imageIcono = document.createElement('img');
  imageIcono.src = './img/iconoLogin.png';
  divLogoRegister.append(imageIcono);
  divTitleLogo.append(titleLogo);

  // ContainerRight
  containerRight.append(iconComeBack, divLogoRegister, formRegister);
  // ContainerLeft
  containerLeft.append(divContainerPhrase, imgSeniorFace, divTitleLogo);

  containerSection.append(containerLeft, containerRight);

  // //=======================================================================================//
  // Validación de inputs
  iconComeBack.addEventListener('click', () => navigateTo('/login'));

  const listInputs = [inputInsertCorreo, inputInsertPassword];
  console.log('prueba 0', listInputs);

  // Validación de input vacio - funcion para mostrar correcto
  function errorInput(input, messageError) {
    const listInput = input.parentElement;
    listInput.className = 'listInput error';
    const span = listInput.querySelector('span');
    listInput.classList.add('error');
    span.innerText = messageError;
  }

  function succesInput(input) {
    const listInput = input.parentElement;
    listInput.classList.add('success');
    listInput.querySelector('span').innerText = '';
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

  formRegister.addEventListener('submit', (e) => {
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
      registerUser(valueCorreo, valuePassword)
        .then((result) => {
          console.log('prueba create', result);
          navigateTo('/home');
        })
        .catch((err) => {
          console.error(err);
          const emailInvalid = document.createElement('div');
          emailInvalid.classList.add('emailInvalid');
          const messageInvalid = document.createElement('span');
          messageInvalid.textContent = 'El correo ingresado ya se encuentra en uso, intente con otro';
          emailInvalid.append(messageInvalid);
          formRegister.append(emailInvalid);
          setTimeout(() => { formRegister.removeChild(emailInvalid); }, 4000);
        });
    }
    formRegister.reset();
    cleanInputs(inputInsertCorreo);
    cleanInputs(inputInsertPassword);
  });

  // Evento listener para registrarse con Google;
  buttonRegisterGoogle.addEventListener('click', (e) => {
    e.preventDefault();

    signInWithPopupGoogle(googleProvider)
      .then((result) => {
        console.log(result);
        console.log('welcome');
      })
      .catch((err) => console.error(err));
  });

  return containerSection;
}
