const counterStatsPage = () => {
  const counterStats = document.createElement('div');
  counterStats.classList.add('counterStats');

  /* Write your code below, inside `` */
  counterStats.innerHTML = `
<div class="container-fluid counterStats-ct">
<h2>counterStats</h2>
      
</div>

    
    `;

  return counterStats;
};

const loadCounterStats = () => {
  const content = document.getElementById('content');
  content.classList.add('content--inner-page');
  content.textContent = '';
  return content.appendChild(counterStatsPage());
};

export default loadCounterStats;
