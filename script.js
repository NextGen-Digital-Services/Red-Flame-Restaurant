// Smooth Scroll for Menu Button

document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector("#menu").scrollIntoView({
    behavior: "smooth",
  });
});

// Navbar Links Smooth Scroll

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Book Table Button

document.querySelector(".book-btn").addEventListener("click", function () {
  alert("Table Booking Coming Soon");
});

// Call Now Button

document.querySelector(".contact .btn").addEventListener("click", function () {
  window.location.href = "tel:9873800080";
});

// WhatsApp Button Function

function whatsappOrder() {
  let phone = "919873800080";

  let message = "Hello Red Flame Restaurant, I want to place an order.";

  let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}

// Add Floating WhatsApp Button

let whatsappBtn = document.createElement("div");

whatsappBtn.innerHTML = "WhatsApp";

whatsappBtn.style.position = "fixed";

whatsappBtn.style.bottom = "20px";

whatsappBtn.style.right = "20px";

whatsappBtn.style.background = "#25D366";

whatsappBtn.style.color = "white";

whatsappBtn.style.padding = "12px 18px";

whatsappBtn.style.borderRadius = "30px";

whatsappBtn.style.cursor = "pointer";

whatsappBtn.style.zIndex = "999";

whatsappBtn.style.fontWeight = "500";

document.body.appendChild(whatsappBtn);

whatsappBtn.addEventListener("click", whatsappOrder);

// Book Table Button Redirect

document.querySelector(".book-btn").addEventListener("click", function () {
  document.querySelector("#contact").scrollIntoView({
    behavior: "smooth",
  });
});

// Explore Menu Button

document.querySelector(".hero .btn").addEventListener("click", function () {
  document.querySelector("#menu").scrollIntoView({
    behavior: "smooth",
  });
});
