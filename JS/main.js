// Toggle Button
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("toggleMenu");
    const navLinks = document.getElementById("menu");

    // Toggle open/close when button clicked
    toggle.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent closing instantly
        navLinks.classList.toggle("active");

        // Change icon
        toggle.innerHTML = navLinks.classList.contains("active")
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
        if (
            navLinks.classList.contains("active") &&
            !navLinks.contains(e.target) &&
            e.target !== toggle
        ) {
            navLinks.classList.remove("active");
            toggle.innerHTML = '<i class="fas fa-bars"></i>'; // revert icon
        }
    });

    // Close menu when clicking on any link
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            toggle.innerHTML = '<i class="fas fa-bars"></i>'; // revert icon
        });
    });
});

//Countdown

const saleEndDate = new Date("October 20, 2025 23:59:59").getTime();
const countdownFunction = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the end date
    const distance = saleEndDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Function to ensure two digits (e.g., 9 -> 09)
    const pad = (num) => num < 10 ? '0' + num : num;

    // Output the result in elements with specific IDs
    document.getElementById("days").innerHTML = pad(days);
    document.getElementById("hours").innerHTML = pad(hours);
    document.getElementById("minutes").innerHTML = pad(minutes);
    document.getElementById("seconds").innerHTML = pad(seconds);

    // If the countdown is finished, write some text 
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown-timer").innerHTML = '<p class="text-3xl font-bold text-white">SALE ENDED</p>';
    }
}, 1000);
