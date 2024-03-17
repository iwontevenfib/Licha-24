
// NAVBAR
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
  console.log(scrollY)
  if (scrollY >= 673) {
    navbar.classList.add('bg')
  }
  else {
    navbar.classList.remove('bg');
  }
})

const navbar1 = document.querySelector('.return');
window.addEventListener('scroll', () => {
  // console.log(scrollY)
  if (scrollY >= 50) {
    navbar1.classList.add('bg')
  }
  else {
    navbar1.classList.remove('bg');
  }
})



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


// alert("Maam buong Pelepens na ginawa namin, eto kasi sinend ng mga groupmates ko e, sorry po haha - Karl")
