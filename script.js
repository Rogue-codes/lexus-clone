var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}


// slider
const productContainer = [...document.querySelectorAll('.product-container')]
const prev = [...document.querySelectorAll('.prv')]
const nxt = [...document.querySelectorAll('.nxt')]

productContainer.forEach((item, idx)=>{
  let cd = item.getBoundingClientRect()
  let cw = cd.width

  nxt[idx].addEventListener('click', ()=>{
    item.scrollLeft += cw
  })

  prev[idx].addEventListener('click', ()=>{
    item.scrollLeft -= cw
  })
})

// menu toggle
const harmburger = document.querySelector('.harmburger')
const ul = document.getElementById('ul')

harmburger.addEventListener('click', ()=>{
    harmburger.classList.toggle('actively')
    ul.classList.toggle('actively')
})

document.querySelectorAll('.dropbtn').forEach(n => n.addEventListener('click', () => {
    harmburger.classList.remove('actively')
    ul.classList.remove('actively')
}))