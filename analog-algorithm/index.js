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
document.querySelector(".info-title1").addEventListener("click", function() {
  const content = document.querySelector(".info-content1");
      if (window.getComputedStyle(content).display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
});
document.querySelector(".info-title2").addEventListener("click", function() {
  const content = document.querySelector(".info-content2");
      if (window.getComputedStyle(content).display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
});
document.querySelector(".info-title3").addEventListener("click", function() {
  const content = document.querySelector(".info-content3");
      if (window.getComputedStyle(content).display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
});