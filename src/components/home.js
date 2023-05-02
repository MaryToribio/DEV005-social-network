import { createCollection, getPost, onGetPost } from '../lib/index';

export function home() {
// Creación del body
  const bodyHome = document.createElement('body');

  // Creación del nav
  const navHome = document.createElement('nav');
  const titleHome = document.createElement('h1');
  titleHome.textContent = 'Senior Face';
  const divUserName = document.createElement('div');
  const userName = document.createElement('span');
  divUserName.append(userName);
  navHome.append(titleHome, userName);

  // Creación del main
  const mainHome = document.createElement('main');
  // Creación de Seccion para el usuario
  const sectionUser = document.createElement('section');
  const articleUser = document.createElement('article');
  const labelUser = document.createElement('label');
  const inputlUserPost = document.createElement('input');
  inputlUserPost.classList.add('inputUserPost');
  const buttonSendPost = document.createElement('button');
  buttonSendPost.textContent = 'Enviar';
  articleUser.append(labelUser, inputlUserPost, buttonSendPost);
  sectionUser.append(articleUser);
  // Creación de sección para post
  const sectionToPost = document.createElement('section');
  const formToPost = document.createElement('form');
  const labelToPost = document.createElement('label');
  labelToPost.textContent = 'CREAR PUBLICACION';
  const inputToPost = document.createElement('input');
  inputToPost.placeholder = 'QUE DESEAS COMPARTIR HOY';
  const buttonToPost = document.createElement('button');
  buttonToPost.textContent = 'PUBLICAR';
  formToPost.append(labelToPost, inputToPost, buttonToPost);

  // Ingresandoelementos a sectionToPost
  sectionToPost.append(formToPost);
  const sectionPost = document.createElement('section');

  // Ingreso de elementos en mainHome

  mainHome.append(sectionToPost, sectionPost);

  // Ingreso de elementos en bodyHome
  bodyHome.append(
    navHome,
    mainHome,
  );
  // --------------------------------------------------------------
  // ---------------------------------------------------------------

  // Pintar post al refrescar pantalla
  // window.addEventListener('DOMContentLoaded', async () => {
  //----------------------------------

  onGetPost((querySnapshot) => {
    let html = '';
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      html += ` <article>
      <p>${post.newPost}</p>
      <p>${post.user}</p>
    </article>`;
    });
    sectionPost.innerHTML = html;
  });
  // });

  // crecion de eventos
  formToPost.addEventListener('submit', (e) => {
    e.preventDefault();

    const newPost = {
      content: inputToPost.value,
    };
    createCollection(newPost.content);
  });

  return bodyHome;
}
