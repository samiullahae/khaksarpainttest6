document.addEventListener('DOMContentLoaded', function () {

  // ===============================
  // Contact Form Validation
  // ===============================
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      const name = document.getElementById('name')?.value;
      const email = document.getElementById('email')?.value;
      const message = document.getElementById('message')?.value;

      if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out all fields.');
      }
    });
  }

  // ===============================
  // Floating Contact Buttons
  // ===============================
  const contactFloat = document.querySelector('.contact-float');
  if (contactFloat) {
    window.addEventListener('scroll', () => {
      contactFloat.classList.toggle('show', window.scrollY > 20);
    });
  }

  // ===============================
  // Mobile Dropdown Toggle
  // ===============================
  document.querySelectorAll('.dropdown > a, .dropdown > span').forEach(item => {
    item.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.parentElement.classList.toggle('open');
      }
    });
  });

});
