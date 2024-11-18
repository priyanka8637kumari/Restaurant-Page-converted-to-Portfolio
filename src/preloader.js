const preloaderPage = () => {
  const preloader = document.createElement('div');
  preloader.classList.add('preloader');

  /* Write your code below, inside `` */
  preloader.innerHTML = `
          
        `;

  return preloader;
};

const loadPreloader = () => {
  const content = document.getElementById('content');
  content.classList.add('content--inner-page');
  content.textContent = '';
  return content.appendChild(preloaderPage());
};

export default loadPreloader;
