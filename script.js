document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("name");
  const addressInput = document.getElementById("address");
  const numberInput = document.getElementById("phone-number");
  const emailInput = document.getElementById("email");

  console.log("Validation script loaded");

  form.addEventListener("submit", function (event) {
    const errors = [];

    // Name validation (minimum 3 characters)
    if (nameInput.value.trim().length < 3) {
      errors.push("Name must be at least 3 characters long.");
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      errors.push("Please enter a valid email address.");
    }

    // Phone number validation (US format with area code)
    const phoneRegex = /^(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
    if (!phoneRegex.test(numberInput.value.trim())) {
      errors.push("Please enter a valid phone number including area code (e.g., 123-456-7890).");
    }

    // Address validation (must include ZIP code)
    const zipRegex = /\b\d{5}\b/;
    if (!zipRegex.test(addressInput.value.trim())) {
      errors.push("Address must include a valid 5-digit ZIP code.");
    }

    if (errors.length > 0) {
      event.preventDefault();
      alert(errors.join("\n"));
    } else {
      event.preventDefault(); // Remove this if you want actual form submission
      alert("Thank you!");
    }
  });
});
