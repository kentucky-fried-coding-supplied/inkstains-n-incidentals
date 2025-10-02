document.addEventListener('DOMContentLoaded', function () {
  let page = window.location.pathname.split('/').pop().split('.').shift();

  let contentContainer = document.querySelector('.homepage-content');

  if (contentContainer) {
      fetch(`./pages/content/${page}.html`) // Adjust path if needed
          .then(response => {
              if (!response.ok) {
                  throw new Error(`Content not found for ${page}`);
              }
              return response.text();
          })
          .then(data => {
              contentContainer.innerHTML = data;
          })
          .catch(error => {
              console.error('Error loading content:', error);
          });
  }
});
