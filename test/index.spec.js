// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';
import { register } from '../src/components/register.js';
// import { registerUser } from '../src/lib/index.js';

describe('register', () => {
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
});

describe('funcion register', () => {
  let containerSection;

  beforeEach(() => {
    containerSection = register();
    document.body.appendChild(containerSection);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should display error message for empty email field', () => {
    const inputInsertCorreo = containerSection.querySelector('.inputInsertCorreo');
    const buttonRegister = containerSection.querySelector('.buttonRegister');
    const errorMessageEmail = containerSection.querySelector('.listInput.error small');

    inputInsertCorreo.value = '';
    buttonRegister.click();

    expect(errorMessageEmail.textContent).toBe('El campo está vacío');
    expect(inputInsertCorreo.parentElement.classList.contains('error')).toBe(true);
  });

  it('should display error message for invalid email format', () => {
    const inputInsertCorreo = containerSection.querySelector('.inputInsertCorreo');
    const buttonRegister = containerSection.querySelector('.buttonRegister');
    const errorMessageEmail = containerSection.querySelector('.listInput.error small');

    inputInsertCorreo.value = 'invalid-email';
    buttonRegister.click();

    expect(errorMessageEmail.textContent).toBe('El campo debe ser llenado correctamente');
    expect(inputInsertCorreo.parentElement.classList.contains('error')).toBe(true);
  });

  it('should display error message for empty password field', () => {
    const inputInsertPassword = containerSection.querySelector('.inputInsertPassword');
    const buttonRegister = containerSection.querySelector('.buttonRegister');
    const errorMessagePassword = containerSection.querySelector('.listInput.error small');

    inputInsertPassword.value = '';
    buttonRegister.click();

    expect(errorMessagePassword.textContent).toBe('El campo debe contener al menos 6 dígitos');
    expect(inputInsertPassword.parentElement.classList.contains('error')).toBe(true);
  });

  it('should register a user when all fields are valid', () => {
    // Mock the registerUser function
    const registerUser = jest.fn();
    registerUser.mockResolvedValue(/* mock response */);

    // Set valid values for email and password fields
    const inputInsertCorreo = containerSection.querySelector('.inputInsertCorreo');
    const inputInsertPassword = containerSection.querySelector('.inputInsertPassword');
    const buttonRegister = containerSection.querySelector('.buttonRegister');
    inputInsertCorreo.value = 'test@example.com';
    inputInsertPassword.value = 'password';

    // Call the register function with mock dependencies
    buttonRegister.click();

    // Expect the registerUser function to be called with the correct email and password
    expect(registerUser).toHaveBeenCalledWith('test@example.com', 'password');
  });
});
