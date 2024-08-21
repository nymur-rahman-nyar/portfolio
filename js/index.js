document.addEventListener("DOMContentLoaded", function() {
    var coll = document.querySelector(".collapsible");
    var content = document.querySelector(".content");

    coll.addEventListener("click", function() {
        this.classList.toggle("active");

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});


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