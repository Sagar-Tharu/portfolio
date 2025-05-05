// Initialize EmailJS
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    (function() {
        try {
            emailjs.init("wknT6x4EbiIlBycuE");
            console.log("EmailJS initialized successfully");
        } catch (error) {
            console.error("Error initializing EmailJS:", error);
        }
    })();

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    const alertSuccess = document.getElementById('alertSuccess');
    const alertError = document.getElementById('alertError');

    // Hide alerts initially
    alertSuccess.style.display = 'none';
    alertError.style.display = 'none';

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: contactForm.name.value,
            email: contactForm.email.value,
            message: contactForm.message.value,
            to_email: 'sagar67tharu@gmail.com' // Add recipient email
        };

        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="bi bi-hourglass-split"></i> Sending...';
        submitBtn.disabled = true;

        // Send email using EmailJS
        emailjs.send('service_idev4os', 'template_2h1pm1f', formData)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                // Show success message
                alertSuccess.style.display = 'block';
                alertError.style.display = 'none';
                // Reset form
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    alertSuccess.style.display = 'none';
                }, 5000);
            }, function(error) {
                console.log('FAILED...', error);
                // Show detailed error message
                alertError.innerHTML = `Error: ${error.text || 'Failed to send message. Please try again.'}`;
                alertError.style.display = 'block';
                alertSuccess.style.display = 'none';
                
                // Hide error message after 5 seconds
                setTimeout(() => {
                    alertError.style.display = 'none';
                }, 5000);
            })
            .finally(() => {
                // Reset button state
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            });
    });
});

// Initialize Typed.js
var typed = new Typed('#typed-text', {
  strings: [
    'Software Engineer',
    'Full Stack Developer',
    'AI/ML Enthusiast',
    'Cloud Architect',
    'Problem Solver'
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 2000,
  startDelay: 1000,
  loop: true,
  showCursor: true,
  cursorChar: '|'
});

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

// Project card hover effect
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Password Protection
let currentAction = '';

function showPasswordModal(action) {
  currentAction = action;
  const modal = new bootstrap.Modal(document.getElementById('passwordModal'));
  document.getElementById('password').value = '';
  document.getElementById('passwordError').style.display = 'none';
  modal.show();
}

function verifyPassword() {
  const password = document.getElementById('password').value;
  const correctPassword = 'sagar@220'; // Your password
  
  if (password === correctPassword) {
    const modal = bootstrap.Modal.getInstance(document.getElementById('passwordModal'));
    modal.hide();
    
    if (currentAction === 'view') {
      window.open('Resume Sagar Tharu.pdf', '_blank');
    } else if (currentAction === 'download') {
      const link = document.createElement('a');
      link.href = 'Resume Sagar Tharu.pdf';
      link.download = 'Resume Sagar Tharu.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  } else {
    document.getElementById('passwordError').style.display = 'block';
    document.getElementById('password').value = '';
  }
}

// Add event listener for Enter key in password field
document.getElementById('password').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    verifyPassword();
  }
}); 