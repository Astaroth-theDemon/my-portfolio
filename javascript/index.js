
        async function loadContent(url) {
            try {
                const response = await fetch(url);
                const html = await response.text();
                document.getElementById('content-area').innerHTML = html;
                // Hide the h2 element when content is loaded
                document.getElementById('name-header').style.display = 'none';
            } catch (error) {
                console.error('Error loading content:', error);
                document.getElementById('content-area').innerHTML = '<p>Error loading content.</p>';
            }
        }


       
document.querySelectorAll("nav ul li").forEach(li => {
  li.addEventListener("click", function() {

    // remove active from all <li>
    document.querySelectorAll("nav ul li").forEach(item => {
      item.classList.remove("active");
    });

    // add active to clicked <li>
    this.classList.add("active");
  });
});
