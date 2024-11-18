import loadHome from './home';
import loadContact from './contact';
import loadServices from './services';
import loadCounterStats from './counter-stats';
import loadTeam from './team';
import loadPreloader from './preloader';
import loadPortfolio from './portfolio';

const pageLoad = () => {
  const navLinks = document.querySelectorAll('.main-nav__link');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });
      const linkId = link.getAttribute('id');
      link.classList.add('active');

      const content = document.querySelector('#content');
      content.innerHTML = '';

      if (linkId === 'home' || linkId === 'logo') loadHome();
      else if (linkId === 'preload') loadPreloader();
      else if (linkId === 'contact') loadContact();
      else if (linkId === 'portfolio') loadPortfolio();
      else if (linkId === 'services') loadServices();
      else if (linkId === 'counterStats') loadCounterStats();
      else if (linkId === 'team') loadTeam();
    });
  });

  loadHome();
};

export default pageLoad;
