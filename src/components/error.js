export function error() {
  const section = document.createElement('section');
  const imgError = document.createElement('img');
  imgError.classList.add('imgError');

  imgError.src = 'http://gsr.com.mx/wp-content/uploads/2017/07/pagina-construccion.jpg';
  section.append(imgError);
  return section;
}
