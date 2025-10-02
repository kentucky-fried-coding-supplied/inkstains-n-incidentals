document.addEventListener('DOMContentLoaded', function () {
    fetch('src/pages/index.html')  // Load the index template
      .then(response => response.text())
      .then(html => {
        // Check if index.html is loaded correctly
        console.log('Index template loaded:', html);
        
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Check if the container is found in index.html
        const container = doc.querySelector('.container');
        if (!container) {
          console.error('Container not found in index.html');
          return;
        }

        // Extract the content of the .container
        const bodyContent = container.innerHTML;

        // Log the body content to ensure it's correct
        console.log('Container content:', bodyContent);

        // Replace the .container's content with the loaded content
        document.querySelector('.container').innerHTML = bodyContent;

        // Move the custom content into the #page-content
        const customContent = document.getElementById('custom-content');
        if (customContent) {
          document.getElementById('page-content').innerHTML = customContent.innerHTML;
          customContent.remove();  // Remove original content to prevent duplication
        } else {
          console.error('Custom content not found in home.html');
        }
      })
      .catch(error => {
        console.error('Error loading template:', error);
      });
});
