const themeToggleButton = document.getElementById('themeToggle');
const buttonIcon = document.querySelector('.themeIcon');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('light-theme')

    if (body.classList.contains('light-theme')) {
        buttonIcon.src = "assets/moon-stars-svgrepo-com.svg";
    } else {
        buttonIcon.src = "assets/sun-2-svgrepo-com.svg";
    }
})