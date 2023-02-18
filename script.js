const button = document.querySelector('.button');

button.addEventListener('mouseenter', () => {
  button.classList.add('hover');
});

button.addEventListener('mouseleave', () => {
  button.classList.remove('hover');
});

button.addEventListener('click', () => {
  window.location.href = './whitepaper.html';
});
