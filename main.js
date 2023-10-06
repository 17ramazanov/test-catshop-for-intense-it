function toggleMenu() {
    let menuElement = document.getElementById('main-menu');
    menuElement.classList.toggle('menu-active');
}



const likeIcons = document.querySelectorAll('.like-icon');

likeIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    const block = icon.parentElement;

    const liked = block.getAttribute('data-liked') === 'true';

    if (!liked) {
      block.setAttribute('data-liked', 'true');
      icon.style.color = 'red';
    } else {

      block.setAttribute('data-liked', 'false');
      icon.style.color = ''; 
    }
  });
});


