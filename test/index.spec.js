import { register } from '../src/components/register.js';
import login from '../src/components/login.js';
import * as auth from '../src/lib/index';

describe('register', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('debería ser una función', () => {
    expect(typeof register).toBe('function');
  });

  it('debería tener un botón', () => {
    const DOM = document.createElement('div');
    DOM.append(register());
    const iconComeBack = DOM.querySelector('.fa-reply-all');
    expect(iconComeBack).not.toBe(undefined);
  });
  it('debería llamar función navegateTo', () => {
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    DOM.append(register(navigateTo));
    const iconComeBack = DOM.querySelector('.fa-reply-all');
    iconComeBack.click();
    expect(navigateTo).toHaveBeenCalled();
  });
  it('debería ir a la ruta login(/login)', () => {
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    DOM.append(register(navigateTo));
    const iconComeBack = DOM.querySelector('.fa-reply-all');
    iconComeBack.click();
    expect(navigateTo).toHaveBeenCalledWith('/login');
  });
  it('Debe mostrar un error si los campos están vacíos', () => {
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    DOM.append(register(navigateTo));
    const formRegister = DOM.querySelector('.formRegister');
    // Simular envío del formulario con campos vacíos
    formRegister.dispatchEvent(new Event('submit'));

    const emailErrorMessage = DOM.querySelector('.inputInsertCorreo').parentElement.querySelector('span');
    const passwordErrorMessage = DOM.querySelector('.inputInsertPassword').parentElement.querySelector('span');

    expect(emailErrorMessage.innerText).toBe('Los campos aún no han sido llenados');
    expect(passwordErrorMessage.innerText).toBe('Los campos aún no han sido llenados');
  });
});

// ===================================

describe('Pruebas de login', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('is a function', () => {
    expect(typeof login).toBe('function');
  });

  it('have a formLogin', () => {
    const containerLogin = document.createElement('div');
    containerLogin.append(login());

    const haveAButton = containerLogin.querySelector('.formLogin');
    expect(haveAButton).not.toBe(undefined);
  });

  it('Debe mostrar un error si los campos están vacíos', () => {
    const containerLogin = document.createElement('div');
    containerLogin.append(login());

    const formLogin = containerLogin.querySelector('.formLogin');
    // Simular envío del formulario con campos vacíos
    formLogin.dispatchEvent(new Event('submit'));

    const emailErrorMessage = containerLogin.querySelector('#email').parentElement.querySelector('span');
    const passwordErrorMessage = containerLogin.querySelector('#password').parentElement.querySelector('span');

    expect(emailErrorMessage.innerText).toBe('Los campos aún no han sido llenados');
    expect(passwordErrorMessage.innerText).toBe('Los campos aún no han sido llenados');
  });

  it('Debe redirigir al usuario a la página de inicio después de un inicio de sesión exitoso', async () => {
    const containerLogin = document.createElement('div');
    const navigateTo = jest.fn(); // Simular la redirección a la página de inicio
    containerLogin.append(login(navigateTo));

    // Simular la resolución exitosa de la promesa de validación
    jest.spyOn(auth, 'validateUserAndPasswordFireBase').mockImplementation(() => Promise.resolve(
      {
        user: {
          uid: 'kssddd',
          email: 'romulo@gmail.com',
          emailVerified: false,
          isAnonymous: false,
          createdAt: '1684278697357',
        },
        operationType: 'signIn',
      },
    ));

    const formLogin = containerLogin.querySelector('.formLogin');
    const emailInput = containerLogin.querySelector('#email');
    const passwordInput = containerLogin.querySelector('#password');

    // Rellenar los campos del formulario
    emailInput.value = 'correo@valido.com';
    passwordInput.value = '123456';

    // Simular envío del formulario
    formLogin.dispatchEvent(new Event('submit'));

    // Esperar a que se resuelva la promesa de validación
    await Promise.resolve();

    expect(auth.validateUserAndPasswordFireBase).toHaveBeenCalledTimes(1);
    expect(auth.validateUserAndPasswordFireBase).toHaveBeenLastCalledWith('correo@valido.com', '123456');

    expect(navigateTo).toHaveBeenCalledTimes(1);
    expect(navigateTo).toHaveBeenCalledWith('/home');
  });
});
