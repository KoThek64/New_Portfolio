// Configuration EmailJS
const EMAILJS_CONFIG = {
    PUBLIC_KEY: "whsqkWOsrxFthPCxz",
    SERVICE_ID: "service_ujc9wsd",
    TEMPLATE_ID: "template_6heio4q"
};

// Initialiser EmailJS
(function() {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
})();

// Animation de typing pour le code
function initCodeAnimation() {
    const codeElement = document.querySelector('.code-content code');
    if (codeElement) {
        function typeCode() {
            codeElement.style.opacity = '0';
            setTimeout(() => {
                codeElement.style.opacity = '1';
                codeElement.classList.add('typing-animation');
            }, 100);
        }
        setTimeout(typeCode, 500);
    }
}

// Validation du formulaire
function validateForm(name, email, message) {
    const errors = [];
    
    if (name.length < 2) {
        errors.push('Le nom doit contenir au moins 2 caractères.');
    }
    
    if (name.length > 100) {
        errors.push('Le nom ne peut pas dépasser 100 caractères.');
    }
    
    // Validation email plus stricte
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push('L\'adresse email n\'est pas valide.');
    }
    
    if (message.length < 10) {
        errors.push('Le message doit contenir au moins 10 caractères.');
    }
    
    if (message.length > 1000) {
        errors.push('Le message ne peut pas dépasser 1000 caractères.');
    }
    
    return errors;
}

// Afficher un message
function showMessage(formMessage, type, text) {
    formMessage.className = `form-message ${type}`;
    formMessage.textContent = text;
    formMessage.style.display = 'block';
}

// Gestion du formulaire de contact
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = document.getElementById('submitBtn');
        const btnText = submitBtn.querySelector('.btn-text');
        const formMessage = document.getElementById('formMessage');
        
        // Récupérer et nettoyer les valeurs
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validation
        const errors = validateForm(name, email, message);
        if (errors.length > 0) {
            showMessage(formMessage, 'error', '✗ ' + errors[0]);
            return;
        }
        
        // Désactiver le bouton pendant l'envoi
        submitBtn.disabled = true;
        const originalText = btnText.textContent;
        btnText.textContent = 'Envoi en cours...';
        formMessage.style.display = 'none';
        
        // Préparer les paramètres de l'email
        const templateParams = {
            from_name: name,
            reply_to: email,
            message: message
        };
        
        // Envoyer l'email via EmailJS
        emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                showMessage(formMessage, 'success', '✓ Message envoyé avec succès !');
                contactForm.reset();
            })
            .catch(function(error) {
                console.error('FAILED...', error);
                showMessage(formMessage, 'error', 
                    '✗ Erreur lors de l\'envoi. Veuillez réessayer ou me contacter directement par email.');
            })
            .finally(function() {
                submitBtn.disabled = false;
                btnText.textContent = originalText;
            });
    });
}

// Initialiser au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    initCodeAnimation();
    initContactForm();
});

// Gestion du menu hamburger
function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (!hamburger || !navMenu) return;
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    document.addEventListener('click', (event) => {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Initialiser au chargement de la page
document.addEventListener('DOMContentLoaded', initHamburgerMenu);

