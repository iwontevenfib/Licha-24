
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



// mobile menu


const openmenu = document.getElementsByClassName('menu-btn')[0]
const nav = document.getElementsByClassName('links-container')[0]

openmenu.addEventListener('click', () => {
  nav.classList.toggle('active1')
})
