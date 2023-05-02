export function error() {
  const section = document.createElement('section');
  const title = document.createElement('h1');
  title.textContent = 'Error 404 nai';
  section.append(title);
  return section;
}
 
