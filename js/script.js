document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.getElementById('typed-name');
    const cursorElement = document.getElementById('cursor');
    const nameToType = "Rohan Sharma";
    let index = 0;
    const typingSpeed = 150; // Milliseconds per character
    const erasingSpeed = 100; // Milliseconds per character during erasing
    const delayBeforeErase = 2000; // Delay before erasing starts (2 seconds)
    const delayBeforeType = 500; // Delay before typing starts again (0.5 seconds)

    function typeWriter() {
      cursorElement.classList.remove('cursor-hidden'); // Show cursor
      cursorElement.style.animation = 'blink 1s step-end infinite'; // Start blinking animation
      if (index < nameToType.length) {
        nameElement.textContent += nameToType.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed);
      } else {
        // Name fully typed, hide cursor and then start erasing
        cursorElement.classList.add('cursor-hidden'); // Hide cursor
        cursorElement.style.animation = 'none'; // Stop blinking animation
        setTimeout(eraseName, delayBeforeErase);
      }
    }

    function eraseName() {
      cursorElement.classList.remove('cursor-hidden'); // Show cursor again for erasing
      cursorElement.style.animation = 'blink 1s step-end infinite'; // Re-enable blinking
      if (nameElement.textContent.length > 0) {
        nameElement.textContent = nameElement.textContent.slice(0, -1);
        setTimeout(eraseName, erasingSpeed);
      } else {
        // Name fully erased, hide cursor and then start typing again
        cursorElement.classList.add('cursor-hidden'); // Hide cursor
        cursorElement.style.animation = 'none'; // Stop blinking animation
        index = 0; // Reset index for typing
        setTimeout(typeWriter, delayBeforeType);
      }
    }

    // Initial delay before the first typing animation starts
    setTimeout(typeWriter, 1000); // 1000ms = 1 second, aligns with your existing delay
  });


   tailwind.config = {
      theme: {
        extend: {
          colors: {
            bg: "#111111",       // Custom dark background
            text: "#ffffff",     // Primary text color
            accent: "#ff004f",   // Highlight/Accent color
          },
          fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            gloria: ['"Gloria Hallelujah"', "cursive"],
            tangerine: ['"Tangerine"', "cursive"],
          },
        },
      },
    };