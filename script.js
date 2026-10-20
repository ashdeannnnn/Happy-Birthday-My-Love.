const surpriseBtn = document.getElementById("surpriseBtn");
const letterBtn = document.getElementById("letterBtn");
const letter = document.getElementById("letter");
const envelope = document.getElementById("envelope");
const wishBtn = document.getElementById("wishBtn");
const finalMessage = document.getElementById("finalMessage");
const heartsContainer = document.getElementById("hearts");
const tulipsContainer = document.querySelector(".floating-tulips");

// Open the surprise and move to the memories section
surpriseBtn.addEventListener("click", () => {
  document.getElementById("memories").scrollIntoView({
    behavior: "smooth"
  });

  createHearts(12);
  createTulips(4);
});

// Reveal the personal love letter
letterBtn.addEventListener("click", () => {
  const isHidden = letter.classList.contains("hidden");

  if (isHidden) {
    letter.classList.remove("hidden");
    letterBtn.textContent = "Close My Letter 💗";
    envelope.querySelector("p").textContent = "A message from my heart to yours.";

    createHearts(15);
    createTulips(5);

    // Mobile-safe smooth scroll delay
    setTimeout(() => {
      letter.scrollIntoView({
        behavior: "smooth",
        block: "nearest" // "nearest" prevents awkward clipping on mobile phone screens
      });
    }, 150);
  } else {
    letter.classList.add("hidden");
    letterBtn.textContent = "Read My Letter";
    envelope.querySelector("p").textContent = "A little letter, written just for you.";
  }
});

// Reveal the final birthday message
wishBtn.addEventListener("click", () => {
  finalMessage.classList.toggle("hidden");

  if (finalMessage.classList.contains("hidden")) {
    wishBtn.textContent = "One More Surprise ✨";
  } else {
    wishBtn.textContent = "You Are So Loved ❤️";
    createHearts(30);
    createTulips(8);

    setTimeout(() => {
      finalMessage.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, 100);
  }
});

// Create floating hearts
function createHearts(amount = 8) {
  const symbols = ["❤️", "💕", "💗", "💖"];

  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");

    heart.className = "heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 14 + Math.random() * 22 + "px";
    heart.style.animationDuration = 3 + Math.random() * 4 + "s";
    heart.style.opacity = "0.85";

    heartsContainer.appendChild(heart);

    heart.addEventListener("animationend", () => {
      heart.remove();
    });
  }
}

// Create floating tulips to match your CSS setup
function createTulips(amount = 4) {
  if (!tulipsContainer) return;
  const tulipSymbols = ["🌷", "🤍"];

  for (let i = 0; i < amount; i++) {
    const tulip = document.createElement("span");
    
    tulip.className = "floating-tulip";
    tulip.textContent = tulipSymbols[Math.floor(Math.random() * tulipSymbols.length)];
    
    tulip.style.left = Math.random() * 100 + "vw";
    tulip.style.fontSize = 18 + Math.random() * 16 + "px";
    tulip.style.animationDuration = 5 + Math.random() * 5 + "s"; // Tulips float up slightly slower than hearts
    
    tulipsContainer.appendChild(tulip);
    
    tulip.addEventListener("animationend", () => {
      tulip.remove();
    });
  }
}

// Ambient background floating elements (Periodically adds 1 heart and 1 tulip)
setInterval(() => {
  if (!document.hidden) {
    createHearts(1);
    createTulips(1);
  }
}, 2200);