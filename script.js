// Function to toggle the 'dark-mode' class on the body
function toggleTheme() {
    const body = document.body;
    const toggleButton = document.getElementById('theme-toggle');

    // Toggle the class
    body.classList.toggle('dark-mode');

    // Update the button text based on the current state
    const isDarkMode = body.classList.contains('dark-mode');
    toggleButton.textContent = isDarkMode 
        ? '🌞 Switch to Light Mode' 
        : '🌙 Switch to Dark Mode';

    // OPTIONAL: Save the user's preference in their browser
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Function to initialize the theme on page load
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const toggleButton = document.getElementById('theme-toggle');
    
    // Check for a saved preference (or default to dark if you prefer)
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = '🌞 Switch to Light Mode';
    } else {
         toggleButton.textContent = '🌙 Switch to Dark Mode';
    }
    
    // Attach the event listener to the button
    toggleButton.addEventListener('click', toggleTheme);
}

// Run the initialization when the page loads
initializeTheme();


// nav bar animation (slide down, open and close)
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
  