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
            e.preventDefault(); // Prevent default link behavior
            const targetId = link.getAttribute('href'); // Get target ID from link
            const targetElement = document.querySelector(targetId); // Find element with corresponding ID
            if (targetElement) {
                // Smooth scroll to the position of the element
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
            navList.classList.remove('show'); // Hide menu after clicking a link
        });
    });

    const subscribeForm = document.querySelector('.subscribe form');

    subscribeForm.addEventListener('submit', e => {
        e.preventDefault(); // Prevent form submission
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const checkboxInputs = document.querySelectorAll('.contact-methods input[type="checkbox"]');
        
        // Check if a name and email are entered, and at least one checkbox is checked
        if (nameInput.value.trim() !== '' && emailInput.value.trim() !== '' && [...checkboxInputs].some(input => input.checked)) {
            // Show successful registration message
            alert("You have registered successfully!");
            // Clear form fields
            subscribeForm.reset();
        } else {
            // Show an error message if information is missing
            alert("Please fill out all fields and select at least one option.");
        }
    });

    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', e => {
        e.preventDefault(); // Prevent form submission
        
        // Show confirmation message
        alert("Thank you for contacting us!");
    });
});
