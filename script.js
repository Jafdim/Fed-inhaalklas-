// Mobile navigation
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('is-open');

    menuButton.classList.toggle('is-open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  const menuLinks = mobileMenu.querySelectorAll('a');

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      menuButton.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

// Demo login form
const loginForm = document.querySelector('#login-form');
const formMessage = document.querySelector('.form-message');

if (loginForm && formMessage) {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formMessage.textContent = 'Demo login submitted. Welcome back!';
  });
}
