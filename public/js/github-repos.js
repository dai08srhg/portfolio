document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('github-repos');
  if (!container) return;
  
  fetch('https://api.github.com/users/dai08srhg/repos?sort=stars&direction=desc&per_page=100')
    .then(response => response.json())
    .then(data => {
      const filteredRepos = data
        .filter(repo => !repo.fork && repo.stargazers_count > 0)
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 4);
      
      filteredRepos.forEach(repo => {
        const card = document.createElement('div');
        card.style.cssText = 'padding: 12px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9; transition: all 0.3s ease;';
        card.onmouseover = () => card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        card.onmouseout = () => card.style.boxShadow = 'none';
        card.innerHTML = `
          <h3 style="font-size: 14px; margin: 0 0 8px 0;"><a href="${repo.html_url}" target="_blank" style="text-decoration: none; color: #003056;">${repo.name}</a></h3>
          <p style="color: #666; font-size: 12px; margin: 0 0 8px 0;">${repo.description || 'No description'}</p>
          <p style="font-size: 11px; color: #999; margin: 0;">⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch(error => console.error('Error fetching repos:', error));
});

