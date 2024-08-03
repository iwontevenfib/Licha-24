

// IMAGE SHOW ON CLICK

document.querySelectorAll('.rexplore-sec img').forEach(image => {
    image.onclick = () => {
      document.querySelector('.pop-up-img').style.display = 'block';
      document.querySelector('.pop-up-img img').src = image.getAttribute('src');
    }
  });
  
  document.querySelector('.pop-up-img span').onclick = () => {
    document.querySelector('.pop-up-img').style.display = 'none';
  };
  



// SCROLL ON TOP
const scrollTop = document.querySelector(".scroll-on-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
   scrollTop.classList.add("scrollactive");
}else {
  scrollTop.classList.remove("scrollactive");
}
})