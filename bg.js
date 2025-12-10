const numberOfHearts = 15;
const heartSize = 60;
const bigHeartSize = 150;
const padding = 20;
const positions = [];

function isOverlapping(x, y) {
   const overlapsOther = positions.some(pos => {
      const dx = pos.x - x;
      const dy = pos.y - y;
      return Math.sqrt(dx * dx + dy * dy) < heartSize + 10;
   });

   const screenWidth = window.innerWidth;
   const screenHeight = window.innerHeight;
   const bottomRightX = screenWidth - bigHeartSize - padding;
   const bottomRightY = screenHeight - bigHeartSize - padding;

   const overlapsBigHeart = x + heartSize > bottomRightX && y + heartSize > bottomRightY;

   // Avoid overlap with the text container area (roughly centered)
   const centerX = screenWidth / 2;
   const centerY = screenHeight / 2;
   const boxWidth = 300;
   const boxHeight = 150;
   const overlapsText = (
      x + heartSize > centerX - boxWidth / 2 &&
      x < centerX + boxWidth / 2 &&
      y + heartSize > centerY - boxHeight / 2 &&
      y < centerY + boxHeight / 2
   );

   return overlapsOther || overlapsBigHeart || overlapsText;
}

for (let i = 0; i < numberOfHearts; i++) {
   let x, y;
   let tries = 0;

   do {
      x = Math.random() * (window.innerWidth - heartSize);
      y = Math.random() * (window.innerHeight - heartSize);
      tries++;
   } while (isOverlapping(x, y) && tries < 100);

   positions.push({ x, y });

   const heart = document.createElement("div");
   heart.className = "heart";
   heart.style.left = `${x}px`;
   heart.style.top = `${y}px`;
   heart.style.rotate = `${Math.random() * 30 - 15}deg`;

   document.body.appendChild(heart);
}