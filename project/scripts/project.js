document.addEventListener('DOMContentLoaded', () => {
    const currentYearElement = document.getElementById("current-year");
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;

    const lastModifiedElement = document.getElementById("last-modified");
    const lastModified = new Date(document.lastModified).toLocaleString();
    lastModifiedElement.textContent = `Last modified: ${lastModified}`;
    
    const menuIcon = document.querySelector('.menu-icon');
    const navList = document.querySelector('nav ul');

    menuIcon.addEventListener('click', () => {
        navList.classList.toggle('show');
    });

    const menuLinks = document.querySelectorAll('nav ul li a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault(); 
            const targetId = link.getAttribute('href'); 
            const targetElement = document.querySelector(targetId); 
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
            navList.classList.remove('show'); 
        });
    });

    const subscribeForm = document.querySelector('.subscribe form');

    subscribeForm.addEventListener('submit', e => {
        e.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const checkboxInputs = document.querySelectorAll('.contact-methods input[type="checkbox"]');
        
        if (nameInput.value.trim() !== '' && emailInput.value.trim() !== '' && [...checkboxInputs].some(input => input.checked)) {
            alert("You have registered successfully!");
            subscribeForm.reset();
        } else {
            alert("Please fill out all fields and select at least one option.");
        }
    });

    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        
        alert("Thank you for contacting us!");
    });
});
