document.addEventListener("DOMContentLoaded", function() {
  const toggleSwitch = document.getElementById("toggleSwitch");
  const body = document.getElementById("body");

  // Initialize the toggle switch as a slider
  toggleSwitch.type = "range";
  toggleSwitch.min = "0";
  toggleSwitch.max = "1";
  toggleSwitch.step = "1";
  toggleSwitch.value = "1"; // Start in dark mode

  toggleSwitch.addEventListener("input", function() {
    if (this.value == "1") {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  });

  // Additional JavaScript for smooth scrolling or animations can go here
  document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling
    document.querySelectorAll('.menu a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      });
    });
  
    // Additional JavaScript for 3D animations can go here
    document.addEventListener("DOMContentLoaded", function() {
      // Get the main banner title element
      const mainBannerTitle = document.querySelector('.main-banner h1');
    
      // Add 3D animation on mouseover
      mainBannerTitle.addEventListener('mouseover', function() {
        this.classList.add('animate-3d');
      });
    
      // Remove 3D animation on mouseout
      mainBannerTitle.addEventListener('mouseout', function() {
        this.classList.remove('animate-3d');
      });
    });
    
  });
});
