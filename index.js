var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


// click animation

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousedown', function() {
        this.classList.add('is-pressed');
    });
    card.addEventListener('mouseup', function() {
        this.classList.remove('is-pressed');
    });
    card.addEventListener('mouseleave', function() {
        this.classList.remove('is-pressed');
    });
});


// current year

document.getElementById('current-year').textContent = new Date().getFullYear();



//emoji fly out

document.getElementById('confetti-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent immediate navigation
    for (let i = 0; i < 100; i++) {
        createConfetti();
    }
    setTimeout(() => {
        window.location.href = this.getAttribute('href'); // Navigate after a short delay
    }, 500); // Delay in milliseconds, adjust as needed
});

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.innerText = ['🥳', '🎉', '✨'][Math.floor(Math.random() * 3)]; // Randomly picks an emoji
    confetti.style.left = `${Math.random() * window.innerWidth}px`; // Random horizontal position
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random animation duration between 2 and 5 seconds
    confetti.style.transform = `scale(${Math.random() + 0.5})`; // Random size

    document.body.appendChild(confetti);

    // Remove confetti after it falls down
    setTimeout(() => {
        confetti.remove();
    }, 5000);
}