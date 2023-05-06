import { createCollection, getPost, onGetPost } from '../lib/index';

export function home() {
// Creación del body
  const bodyHome = document.createElement('body');
  bodyHome.classList.add('bodyHome');


  // Creación del nav
  const navHome = document.createElement('nav');
  navHome.classList.add('navHome');
  const titleHome = document.createElement('h1');
  titleHome.classList.add('titleHome');
  titleHome.textContent = 'Senior Face';
  const divUserName = document.createElement('div');
  divUserName.classList.add('divUserName');
  const userName = document.createElement('span');
  divUserName.append(userName);
  navHome.append(titleHome, divUserName);

  // Creación del main
  const mainHome = document.createElement('main');
  mainHome.classList.add('mainHome');

  // Creación de Seccion para el usuario
  /* const sectionUser = document.createElement('section');
  const articleUser = document.createElement('article');
  articleUser.classList.add('articleUser');
  const labelUser = document.createElement('label');
  const inputlUserPost = document.createElement('input');
  inputlUserPost.classList.add('inputUserPost');
  const buttonSendPost = document.createElement('button');
  buttonSendPost.textContent = 'Enviar';
  articleUser.append(labelUser, inputlUserPost, buttonSendPost);
  sectionUser.append(articleUser); */

  // Creación de sección para post
  const sectionToPost = document.createElement('section');
  sectionToPost.classList.add('sectionToPost');
  const formToPost = document.createElement('form');
  formToPost.classList.add('formToPost');
  const labelToPost = document.createElement('label');
  labelToPost.textContent = '¿QUE COMPARTIRAS HOY?';
  const inputToPost = document.createElement('textarea');
  inputToPost.classList.add('inputToPost');
  inputToPost.placeholder = '';
  const buttonToPost = document.createElement('button');
  buttonToPost.textContent = 'PUBLICAR';
  buttonToPost.classList.add('buttonToPost');
  formToPost.append(labelToPost, inputToPost, buttonToPost);

  // creacion de botones de reaccion
  const buttonEmoticonDelete = document.createElement('button');
  buttonEmoticonDelete.classList.add('buttonEmoticonDelete');

  const buttonEmoticonEdit = document.createElement('button');
  buttonEmoticonEdit.classList.add('buttonEmoticonEdit');

  const buttonEmoticon = document.createElement('button');
  buttonEmoticon.classList.add('buttonEmoticon');

  // Ingresandoelementos a sectionToPost
  sectionToPost.append(formToPost);
  const sectionPost = document.createElement('section');
  sectionPost.classList.add('sectionPost');

  // crear boton para eliminar post

  // icono de la parte superior
  /* const divLogoHome = document.createElement('div');
  divLogoHome.classList.add('divLogoHome');
  const imgLogoHome = document.createElement('img');
  imgLogoHome.src = './img/iconoLogin.png';
  divLogoHome.append(imgLogoHome);
  sectionToPost.append(divLogoHome); */

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
      html += ` <article class ='articlePost'>
      <p class='textPost'>${post.newPost}</p>
      <p >${post.user}</p>
    </article>`;
    });
    sectionPost.innerHTML = html;
  });

  // funcionalidad para eliminar publicacion

  // crecion de eventos
  formToPost.addEventListener('submit', (e) => {
    e.preventDefault();

    const newPost = {
      content: inputToPost.value,
    };
    createCollection(newPost.content);
  });

  // funcion de elimiar

  return bodyHome;
}
