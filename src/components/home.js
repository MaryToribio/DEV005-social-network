import {
  createCollection,
  onGetPost,
  auth,
  deleteCollection,
  updatePost,
  signOutSeniorFace,
  removeLike,
  addLike,
} from '../lib/index';

export function home(navigatoTo) {
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
  const divSignOut = document.createElement('div');
  divSignOut.classList.add('divSignOut');
  const spanSignOut = document.createElement('span');
  spanSignOut.textContent = 'Cerrar Sesión';
  divSignOut.append(spanSignOut);
  navHome.append(titleHome, divUserName, divSignOut);

  // Creación del main
  const mainHome = document.createElement('main');
  mainHome.classList.add('mainHome');

  // Creación de sección para postear
  const sectionToPost = document.createElement('section');
  sectionToPost.classList.add('sectionToPost');
  const formToPost = document.createElement('form');
  formToPost.classList.add('formToPost');
  const labelToPost = document.createElement('label');
  labelToPost.textContent = '¿Qué deseas compartir hoy?';
  const inputToPost = document.createElement('textarea');
  inputToPost.classList.add('inputToPost');
  inputToPost.placeholder = '';
  const buttonToPost = document.createElement('button');
  buttonToPost.textContent = 'PUBLICAR';
  buttonToPost.classList.add('buttonToPost');
  formToPost.append(labelToPost, inputToPost, buttonToPost);

  // Ingresando elementos a sectionToPost
  sectionToPost.append(formToPost);

  // Creación de sección de comentarios posteados
  const sectionPost = document.createElement('section');
  sectionPost.classList.add('sectionPost');

  // Ingreso de elementos en mainHome
  mainHome.append(sectionToPost, sectionPost);

  // Ingreso de elementos en bodyHome
  bodyHome.append(
    navHome,
    mainHome,
  );
  /* -------------------------Creación de funciones------------------------------------- */

  // Función para cerrar Sesion
  divSignOut.addEventListener('click', () => {
    signOutSeniorFace(navigatoTo('/login'));
  });

  let editing = false;
  let id = '';

  onGetPost((querySnapshot) => {
    const user = auth.currentUser;
    console.log('probando1', user);
    console.log('probando2', querySnapshot);

    sectionPost.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      const articlePost = document.createElement('article');
      articlePost.classList.add('articlePost');
      const textPost = document.createElement('p');
      textPost.textContent = post.newPost;
      textPost.classList.add('textPost');
      const textUser = document.createElement('span');
      textUser.classList.add('textUser');
      const userNamePrint = post.user.split('@', 1);
      const userNameToPrint = userNamePrint[0];

      const userNameComplete = document.createElement('span');
      userNameComplete.classList.add('userNameComplete');
      userNameComplete.textContent = userNameToPrint;
      textUser.textContent = userNameToPrint.charAt(0).toUpperCase();
      const datePost = doc.data().dateCreated.toDate();
      const optionDate = { year: 'numeric', month: 'long', day: 'numeric' };
      const datePrint = datePost.toLocaleDateString('es-ES', optionDate);
      const datePrinted = document.createElement('span');
      datePrinted.classList.add('datePrinted');
      datePrinted.textContent = datePrint;

      // Creación de modal para eliminar post
      const buttonModalDelete = document.createElement('i');
      buttonModalDelete.classList.add('fa-regular');
      buttonModalDelete.classList.add('fa-trash-can');
      const modalDelete = document.createElement('section');
      modalDelete.classList.add('modalDelete');
      const divModal = document.createElement('div');
      divModal.classList.add('divModal');
      const textDelete = document.createElement('span');
      textDelete.textContent = '¿Estás segura de eliminar esta publicación?';
      const buttonClose = document.createElement('button');
      buttonClose.classList.add('buttonClose');
      buttonClose.textContent = 'No, cerrar';
      const buttonDelete = document.createElement('button');
      buttonDelete.classList.add('buttonDelete');
      buttonDelete.textContent = ('Si, aceptar');
      divModal.append(textDelete, buttonDelete, buttonClose);
      modalDelete.append(divModal);

      buttonModalDelete.addEventListener('click', (e) => {
        e.preventDefault();
        modalDelete.classList.add('modalShow');
        console.log('se pudo burro');
      });
      buttonClose.addEventListener('click', () => {
        modalDelete.classList.remove('modalShow');
      });

      // crear el icono like   post.like(RETORNA EL NUMERO)

      const buttonLike = document.createElement('i');
      buttonLike.classList.add('fa-regular');
      buttonLike.classList.add('fa-thumbs-up');

      articlePost.append(buttonLike);

      const spanLike = document.createElement('span');
      spanLike.innerHTML = '(0)';
      spanLike.classList.add('spanLike');
      if (post.likes !== undefined) {
        spanLike.innerHTML = `(${post.likes.length})`;
      }
      articlePost.append(spanLike);

      buttonLike.addEventListener('click', () => {
        if (post.likes !== undefined && post.likes.includes(user.email)) {
          removeLike(doc.id, user.email);
        } else {
          addLike(doc.id, user.email);
        }
      });

      if (user.email === post.user) {
        userName.textContent = userNameToPrint;
        buttonDelete.addEventListener('click', () => {
          deleteCollection(doc.id);
          modalDelete.classList.remove('modalShow');
        });
        // button edit
        const buttonEdit = document.createElement('i');
        buttonEdit.classList.add('fa-regular');
        buttonEdit.classList.add('fa-pen-to-square');
        buttonEdit.addEventListener('click', () => {
          console.log(doc.id);
          editing = true;
          inputToPost.textContent = post.newPost;
          id = doc.id;
        });

        // crear boton editar
        articlePost.append(
          userNameComplete,
          textPost,
          datePrinted,
          textUser,
          buttonEdit,
          buttonModalDelete,
        );
        mainHome.append(modalDelete);
      } else {
        articlePost.append(userNameComplete, textPost, datePrinted, textUser);
      }
      sectionPost.append(articlePost);
    });
  });

  // funcionalidad para eliminar publicacion

  // crecion de eventos
  formToPost.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!editing) {
      const newPost = {
        content: inputToPost.value,
      };
      createCollection(newPost.content, formToPost);
    } else {
      console.log('hola', id);
      updatePost(id, { newPost: inputToPost.value });
      editing = false;
      inputToPost.textContent = '';
    }
    formToPost.reset();
  });

  // funcion de elimiar

  return bodyHome;
}
