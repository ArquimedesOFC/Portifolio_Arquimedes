  const toggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('nav ul');

  toggle.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
