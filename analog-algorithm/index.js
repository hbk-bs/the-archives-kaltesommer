document.querySelectorAll('.card').forEach(card => {
  let images = card.querySelectorAll('img');
  let index = 0;
  const prevBtn = card.querySelector('.prev');
  const nextBtn = card.querySelector('.next');

  prevBtn.addEventListener('click', () => {
      images[index].classList.remove('active');
      index = (index - 1 + images.length) % images.length;
      images[index].classList.add('active');
  });

  nextBtn.addEventListener('click', () => {
      images[index].classList.remove('active');
      index = (index + 1) % images.length;
      images[index].classList.add('active');
  });
});