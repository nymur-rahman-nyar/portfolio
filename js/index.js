


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

// countdown for graduation 
// Set the date we're counting down to
var countDownDate = new Date("Jun 1, 2026 00:00:00").getTime();

// Update the countdown every 1 second
var countdownfunction = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the countdown date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Display the result in the element with id="clock"
  document.getElementById("clock").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the countdown is finished, write some text
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("clock").innerHTML = "EXPIRED";
  }
}, 1000);
