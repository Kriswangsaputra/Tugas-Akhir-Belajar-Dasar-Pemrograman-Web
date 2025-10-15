//navbar togle
const navList = document.getElementById('nav-list-id');
const btnContact = document.getElementById('btn-contact');
const btnToggle = document.getElementById('navbar-togle');
const navContainer = document.getElementsByClassName('navbar-container');

btnToggle.addEventListener('click',()=>{
    navList.classList.toggle('show');
    btnContact.classList.toggle('show');
    navContainer.classList.toggle('show');
});

// jumbotron slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "flex";
  setTimeout(showSlides, 15000); // Change image every 2 seconds
}

// button click
const button = document.querySelectorAll(".hubungi-kami");

button.forEach(btn => {
  btn.addEventListener("click", () => {
    window.location.href = "https://wa.me/6281293628517";
  });
});


// aside toggle
const asideBg = document.getElementById("aside");
const btnAside = document.getElementById("btn-open");
const author = document.getElementById("author");
const accountName = document.getElementById("account");
const socialMedia = document.getElementById("social-media");
const imgAuthor = document.getElementById("img-author");

btnAside.addEventListener("click", () => {
  asideBg.classList.toggle("show");
  author.classList.toggle("show");
  accountName.classList.toggle("show");
  socialMedia.classList.toggle("show");
  imgAuthor.classList.toggle("show");
});

