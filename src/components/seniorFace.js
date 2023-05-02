/* import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js';
import { getAuth, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.19.0/firebase-auth.js';
import {
  getFirestore, collection, query, onSnapshot, where, addDoc,
} from 'https://www.gstatic.com/firebasejs/9.19.0/firebase-firestore.js';

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

const db = getFirestore(app);
// getHtmlPost son las publicaciones de mu usuario
function getHtmlPost(querySnapshot) {
  let html = '';
  querySnapshot.forEach((doc) => {
    const postData = doc.data();
    const postHtml = `<article class="post-item">
    <p> ${postData.description} </p>
    </article>`;
    html += postHtml;
  });

  return html;
}

onAuthStateChanged(auth, async (user) => {
  if (user) {
    if (auth.currentUser != null) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // Show Posts
      const queryPost = query(collection(db, 'post'), where('uid', '==', uid));
      onSnapshot(queryPost, (querySnapshot) => {
        const postSection = document.getElementsByClassName('post-container')[0];
        const htmlPosts = getHtmlPost(querySnapshot);
        postSection.innerHTML = htmlPosts;
      });
    }

    console.log('home currentUser', auth.currentUser);
    // ...
  } else {
    // User is signed out
    // ...
    console.log('home', 'Nada');
  }
});

// guardar post
const savePost = (uid, description) => {
  addDoc(collection(db, 'post'), {
    uid, description,
  });
};

function seniorFace(navigateTo) {
  const root = document.getElementById('root');
  root.innerHTML = '';

  const postSection = document.createElement('section');
  postSection.classList.add('post-container');

  const buttonCreatePost = document.createElement('button');
  buttonCreatePost.classList.add('buttonClassLogin');
  buttonCreatePost.textContent = 'Crear post';

  const buttonLogOut = document.createElement('button');
  buttonLogOut.classList.add('buttonClassLogin');
  buttonLogOut.textContent = 'Salir';

  root.append(buttonCreatePost);
  root.append(buttonLogOut);
  root.append(postSection);

  const modal = document.getElementById('myModal');
  const modalContent = document.getElementsByClassName('modal-content')[0];
  modalContent.innerHTML = `
<form id="createForm">
            <div id="fileUpload">
              <input type="file" id="post-img" class="post-img" hidden>
              <img src="./img/cameraicon.png" alt="photo icon" class="photo-icon" style="width: 61px;">
            </div>
            <section class="gallery"></section>
            <label for="description">Descripcion</label>
            <textarea id="postDescription" name="textarea" rows="10" autocomplete="off"  cols="50">Write something here</textarea>
            <button id="btnSavePost">Guardar</button>
    </form>`;
  const createForm = document.getElementById('createForm');
  createForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    console.log(user.uid);
    const postDescription = createForm.postDescription;
    savePost(user.uid, postDescription.value);
    modal.style.display = 'none';
    createForm.reset();
  });

  buttonCreatePost.addEventListener('click', () => {
    modal.style.display = 'block';
  });
  buttonLogOut.addEventListener('click', () => {
    const user = getAuth();
    signOut(user).then(() => {
      // Sign-out successful.
      navigateTo('/login');
    }).catch(() => {
      // An error happened.
      navigateTo('/error');
    });
  });

  const spanClose = document.getElementsByClassName('modal-close')[0];
  spanClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  return root;
}
export default seniorFace; */
