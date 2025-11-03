
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".gallery img")) {
    openLightbox(e.target.src, e.target.alt);
  }
});

function openLightbox(imageSrc, altText) {

  const overlay = document.createElement("div");
  overlay.classList.add("lightbox-overlay");
  overlay.innerHTML = `
    <div class="lightbox">
      <img src="${imageSrc}" alt="${altText}">
      <button class="close-lightbox">&times;</button>
    </div>
  `;
  document.body.appendChild(overlay);

  overlay.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("close-lightbox") ||
      e.target.classList.contains("lightbox-overlay")
    ) {
      overlay.remove();
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

function initMap() {
  if (typeof L === "undefined") return;

  const map = L.map("map").setView([-33.8688, 151.2093], 12);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([-33.8688, 151.2093])
    .addTo(map)
    .bindPopup("🐾 Paws for a Cause Shelter Location")
    .openPopup();
}

window.addEventListener("load", initMap);


console.log("🐾 Welcome to Paws for a Cause — making tails wag and hearts happy!");
