const nav = document.querySelector("#mobileNav");

function showNav() {
  nav.classList.remove("hidden");
}

function closeNav() {
  nav.classList.add("hidden");
}

// SET DATE INPUT TO TODAY
document.querySelector("#dateInput").valueAsDate = new Date();
