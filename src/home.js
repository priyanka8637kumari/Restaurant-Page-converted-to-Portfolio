const homePage = () => {
  const home = document.createElement('div');
  home.classList.add('home-text');

  home.innerHTML = `  <div class="intro-body">
        <div class="container">
          <div class="row">
              <div class="brand-heading">
                <span class="txt-rotate" data-period="100" data-rotate='[ "سلام!", "Salut!", "Hola!", "Hej!", "नमस्ते!" ]'></span>
              </div>
              <p class="intro-text">We are Raana, Priyanka, Sergio and Profira,
             <span class="intro-text-hgl">front-end developers</span>
              based in beautiful Sweden.</p>
            </div>
        </div>
      </div>
        `;

  return home;
};

const loadHome = () => {
  const content = document.getElementById('content');
  content.textContent = '';
  content.classList.remove('content--inner-page');
  return content.appendChild(homePage());
};

export default loadHome;
