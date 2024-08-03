

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



// mobile menu


const openmenu = document.getElementsByClassName('menu-btn')[0]
const nav = document.getElementsByClassName('mobile-container')[0]

openmenu.addEventListener('click', () => {
  nav.classList.toggle('active1');
  openmenu.classList.toggle('active');
})



function closeNavbar() {
  var navbarLinks = document.getElementById("navbarLinks");
  navbarLinks.classList.remove("active1");
ekko();
}


function toggleImage(img) {
  if (img.src.endsWith('img/menu.svg')) {
      img.src = 'img/closemenu.svg';
  } else if (img.src.endsWith('img/closemenu.svg')) {
      img.src = 'img/menu.svg';
  } else {
    img.src = 'img/menu.svg';
  }
}

function ekko() {
const reset = openmenu.querySelector('img')
reset.src = 'img/menu.svg';
openmenu.classList.toggle('active');

}


// Scroll on top 

const scrollTop = document.querySelector(".scroll-on-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
   scrollTop.classList.add("scrollactive");
}else {
  scrollTop.classList.remove("scrollactive");
}
})



// window.addEventListener("scroll", () =>{

//   let scroll = this.scrollY;
//   console.log(scroll);
// })



























