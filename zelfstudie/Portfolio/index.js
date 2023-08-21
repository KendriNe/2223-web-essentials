window.addEventListener('scroll', function() {
    const navContainer = document.querySelector('.nav-container');
    const headerHeight = document.querySelector('header').offsetHeight;
    
    if (window.scrollY > headerHeight) {
      navContainer.classList.add('nav-fixed');
    } else {
      navContainer.classList.remove('nav-fixed');
    }
  });
  