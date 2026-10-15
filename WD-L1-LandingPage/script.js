
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Mobile menu link click pannina close aagum
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Product category filters
const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const selectedCategory = button.dataset.filter;

    productCards.forEach((card) => {
      const shouldShow =
        selectedCategory === "all" ||
        card.dataset.category === selectedCategory;

      card.classList.toggle("hidden", !shouldShow);
    });
  });
});

// Demo shopping bag interaction
const cartMessage = document.getElementById("cartMessage");
const addButtons = document.querySelectorAll(".quick-add");

let cartCount = 0;
let cartTotal = 0;

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.dataset.product;
    const productPrice = Number(button.dataset.price);

    cartCount++;
    cartTotal += productPrice;

    cartMessage.textContent =
      `${productName} added! Bag: ${cartCount} item(s) · Total: ₹${cartTotal.toLocaleString("en-IN")}`;

    button.textContent = "Added ✓";

    setTimeout(() => {
      button.textContent = "Add to bag +";
    }, 1200);
  });
});

// Newsletter demo form
const newsletterForm = document.getElementById("newsletterForm");
const newsletterMessage = document.getElementById("newsletterMessage");

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();

  if (!email) {
    newsletterMessage.textContent = "Please enter your email address.";
    return;
  }

  newsletterMessage.textContent =
    "Thank you for joining NovaStyle! This is a frontend demo.";

  newsletterForm.reset();
});
