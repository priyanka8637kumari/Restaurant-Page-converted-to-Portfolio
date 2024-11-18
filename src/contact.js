const contactPage = () => {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  /* Write your code below, inside `` */
  contact.innerHTML = `
           <div class="row">
          <h2>CONTACT</h2>
          
          <p>me@gmail.com</p>
         
          <div class="social">
            <a href="" target="_blank" alt="CodePen profile"><span class="fa fa-codepen" aria-hidden="true"></span></a>
            <a href="" target="_blank" alt="LinkedIn profile"><span class="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href="" target="_blank" alt="GitHub profile"><span class="fa fa-github" aria-hidden="true"></span></a>
          </div>
          <p id="copyright">all rights reserved</p>
        </div>
        `;

  return contact;
};

const loadContact = () => {
  const content = document.getElementById('content');
  content.classList.add('content--inner-page');
  content.textContent = '';
  return content.appendChild(contactPage());
};

export default loadContact;
