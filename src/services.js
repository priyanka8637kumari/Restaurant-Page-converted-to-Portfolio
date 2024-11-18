const servicesPage = () => {
  const services = document.createElement('div');
  services.classList.add('services');

  /* Write your code below, inside `` */
  services.innerHTML = `
           <div class="container">
        <h2>SERVICES</h2>
        <div class="row">
          <div class="ct-services">
            <div class="col-md-4 services-item">
              <div class="rotate">
                <span class="fa fa-code" aria-hidden="true"></span>
              </div>
              <h3>Front End Development</h3>
              <p>Development of responsive websites, cross-browser and cross-platform testing.</p>
            </div>
            <div class="col-md-4 services-item">
              <div class="rotate">
                <span class="fa fa-wordpress fa-wrapper" aria-hidden="true"></span>
              </div>
              <h3>Wordpress Development</h3>
              <p>Custom development (website, theme & plugin), hosting and maintenance.</p>
            </div>
            <div class="col-md-4 services-item">
              <div class="rotate">
                <span class="fa fa-line-chart" aria-hidden="true"></span>
              </div>
              <h3>Search Engine Optimization</h3>
              <p>Increase your visibility across all major search engines & local search with SEO techniques.</p>
            </div>
          </div>
        </div>
      </div>
        `;

  return services;
};

const loadServices = () => {
  const content = document.getElementById('content');
  content.classList.add('content--inner-page');
  content.textContent = '';
  return content.appendChild(servicesPage());
};

export default loadServices;
