document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop form from submitting

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (!name || !email || !message) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fill out all fields.";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please enter a valid email address.";
    return;
  }

  formMessage.style.color = "green";
  formMessage.textContent = "Form submitted successfully!";
});