const portfolioPage = () => {
  const portfolio = document.createElement('div');
  portfolio.classList.add('portfolio');

  /* Write your code below, inside `` */
  portfolio.innerHTML = `
<div class="container-fluid portfolio-ct">
<h2>PORTFOLIO</h2>
        <div class="row">
          <div class="col-sm-6 col-md-4 grid-portfolio">
            <div class="card" style="width: 18rem;">
              <img src="..." class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

</div>

    
    `;

  return portfolio;
};

const loadPortfolio = () => {
  const content = document.getElementById('content');
  content.classList.add('content--inner-page');
  content.textContent = '';
  return content.appendChild(portfolioPage());
};

export default loadPortfolio;
