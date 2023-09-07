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
});
