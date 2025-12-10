window.onload = () => {
   const initialContainer = document.getElementById('initial-container');
   const finalContainer = document.getElementById('final-container');
   const wishTextElement = document.getElementById('wish-text');

   // Delay the transition for effect
   setTimeout(() => {
      // Fade and slide out initial container
      initialContainer.classList.add('hidden');

      // Load text and show final container
      setTimeout(() => {
         finalContainer.classList.remove('hidden');
         fetch('wishes.txt')
            .then(response => response.text())
            .then(text => typeWriter(text, wishTextElement));
      }, 1000); // Wait for fade-out to complete
   }, 2000); // Initial delay before starting
};

function typeWriter(text, element, i = 0) {
   if (i < text.length) {
      element.textContent += text.charAt(i);
      setTimeout(() => typeWriter(text, element, i + 1), 50);
   }
}