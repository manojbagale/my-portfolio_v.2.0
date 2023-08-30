document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.querySelector(".title1");
  
    const targetText = titleElement.textContent.trim(); // Remove extra whitespace
  
    titleElement.textContent = "";
  
    // Function to simulate typing
    
    function typeText(index) {
      if (index < targetText.length) {
        titleElement.textContent += targetText[index];
        setTimeout(function () {
          typeText(index + 1);
        }, 150); 
      }
    }
  
    typeText(0);
  });

// Get the logo element
const logo = document.getElementById('logo');

// Add a click event listener to the logo
logo.addEventListener('click', function() {
  // Navigate to the home page URL
  window.location.href = 'https://www.manojbagale.com.np'; // Replace with your home page URL
});

  