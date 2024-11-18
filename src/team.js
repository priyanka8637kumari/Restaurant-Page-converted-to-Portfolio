const teamPage = () => {
  const team = document.createElement('div');
  team.classList.add('team');

  /* Write your code below, inside `` */
  team.innerHTML = `
<div class="container-fluid team-ct">
<h2>team</h2>
      
</div>

    
    `;

  return team;
};

const loadTeam = () => {
  const content = document.getElementById('content');
  content.classList.add('content--inner-page');
  content.textContent = '';
  return content.appendChild(teamPage());
};

export default loadTeam;
