let homeBtn = document.getElementById("home-btn");
let menuBtn = document.getElementById("menu-btn");
let bookingBtn = document.getElementById("booking-btn");
let aboutBtn = document.getElementById("about-btn");
let homePage = document.getElementById("home");
let menuPage = document.getElementById("menu");
let bookingPage = document.getElementById("booking");
let aboutPage = document.getElementById("about-us");

function home() {
  homeBtn.classList.add("active");
  menuBtn.classList.remove("active");
  bookingBtn.classList.remove("active");
  aboutBtn.classList.remove("active");
  homePage.style.display = "block";
  menuPage.style.display = "none";
  bookingPage.style.display = "none";
  aboutPage.style.display = "none";
}

function menu() {
  homeBtn.classList.remove("active");
  menuBtn.classList.add("active");
  bookingBtn.classList.remove("active");
  aboutBtn.classList.remove("active");
  homePage.style.display = "none";
  menuPage.style.display = "block";
  bookingPage.style.display = "none";
  aboutPage.style.display = "none";
}

function booking() {
  homeBtn.classList.remove("active");
  menuBtn.classList.remove("active");
  bookingBtn.classList.add("active");
  aboutBtn.classList.remove("active");
  homePage.style.display = "none";
  menuPage.style.display = "none";
  bookingPage.style.display = "block";
  aboutPage.style.display = "none";
}

function about() {
  homeBtn.classList.remove("active");
  menuBtn.classList.remove("active");
  bookingBtn.classList.remove("active");
  aboutBtn.classList.add("active");
  homePage.style.display = "none";
  menuPage.style.display = "none";
  bookingPage.style.display = "none";
  aboutPage.style.display = "block";
}