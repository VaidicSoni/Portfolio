const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle('active');
});

// Open GitHub profile
document.querySelector(".visit-btn").addEventListener("click", () => {
    window.open("https://github.com/VaidicSoni", "_blank");
});

// Open GitHub when GitHub icon is clicked
document.querySelector(".fa-github").addEventListener("click", () => {
    window.open("https://github.com/VaidicSoni", "_blank");
});

// Open LinkedIn profile when LinkedIn icon is clicked
document.querySelector(".fa-linkedin").addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/vaidic-soni1004/", "_blank");
});

// Handle contact form submission
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById("contact-form").reset();
});