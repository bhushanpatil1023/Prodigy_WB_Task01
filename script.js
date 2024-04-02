window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY >= 50) {
      navbar.style.backgroundColor = '#ffffff';
      Array.from(navbar.children).forEach(function(element) {
        element.style.color = '#000000';
      });
    } else {
      navbar.style.backgroundColor = '#007bff';
      Array.from(navbar.children).forEach(function(element) {
        element.style.color = '#ffffff';
      });
    }
  });