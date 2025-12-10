function cutCake() {
   const knife = document.getElementById('knife');
   const slice = document.getElementById('slice');

   // Animate knife down
   knife.style.top = '50px';

   // After short delay, move slice
   setTimeout(() => {
      slice.style.transform = 'translate(100px, 80px) rotate(20deg)';
      slice.style.opacity = '0';
   }, 400);
}