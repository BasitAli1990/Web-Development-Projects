const galleryImages = document.querySelectorAll(".main img");
const overlay = document.getElementById('fullscreenOverlay');
const fullscreenImg = document.getElementById('fullscreenImg');
const closeBtn = document.getElementById('closeBtn');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    fullscreenImg.src = img.src;
    overlay.style.display = 'flex';
  });  
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay || e.target === fullscreenImg) {
    overlay.style.display = 'none';
  }
});