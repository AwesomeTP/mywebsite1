// Toggle Dark Mode
const toggleButton = document.querySelector('.theme-toggle');

toggleButton.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('theme-dark');

    // Update button text based on the current theme
    if (isDarkMode) {
        toggleButton.textContent = 'Toggle Light Mode';
    } else {
        toggleButton.textContent = 'Toggle Dark Mode';
    }
});
