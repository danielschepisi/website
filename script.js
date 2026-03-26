// 1. "Grab" the button and the body from the HTML
const themeButton = document.getElementById('theme-button');
const bodyElement = document.body;

// 2. Create a function that runs when the button is clicked
themeButton.addEventListener('click', () => {

  // 3. Toggle the 'dark-theme' class on the body
  bodyElement.classList.toggle('dark-theme');

  // 4. Logic: Change the button text based on the current mode
  if (bodyElement.classList.contains('dark-theme')) {
    themeButton.textContent = "Light";
  } else {
    themeButton.textContent = "Dark";
  }
});