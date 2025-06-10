
  document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.getElementById('typed-name');
    const cursorElement = document.getElementById('cursor');
    const nameToType = "Rohan Sharma";
    let index = 0;
    const typingSpeed = 150; // Milliseconds per character

    function typeWriter() {
      if (index < nameToType.length) {
        nameElement.textContent += nameToType.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed);
      } else {
        // Stop blinking cursor after typing is complete (optional)
        cursorElement.style.animation = 'none';
      }
    }

    // Delay the start of the typing animation slightly after the page loads
    // to align with your existing animate__delay-1s
    setTimeout(typeWriter, 1000); // 1000ms = 1 second
  });
