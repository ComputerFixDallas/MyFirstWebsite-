document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      this.reset();
    } else {
      alert("Please fill out all fields.");
    }
  });
// Add click event listener to each FAQ question
document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
      // Close all open items
      const openItem = document.querySelector(".faq-item.active");
      if (openItem && openItem !== question.parentElement) {
        openItem.classList.remove("active");
      }
  
      // Toggle the current item's visibility
      question.parentElement.classList.toggle("active");
    });
  });
// FAQ Accordion Functionality
document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
      const parent = question.parentElement;
      parent.classList.toggle("active");
  
      // Close other open FAQs
      document.querySelectorAll(".faq-item").forEach((item) => {
        if (item !== parent && item.classList.contains("active")) {
          item.classList.remove("active");
        }
      });
    });
  });
      