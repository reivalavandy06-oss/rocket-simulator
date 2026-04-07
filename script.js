let rocket = document.getElementById("rocket");
let fuelText = document.getElementById("fuel");
let altText = document.getElementById("altitude");
let statusText = document.getElementById("status");

let y = 0;
let x = 0;
let velocity = 0;
let fuel = 100;
let flying = false;
let parachute = false;

function updateUI() {
  fuelText.innerText = fuel;
  altText.innerText = Math.floor(y);
}

function launch() {
  if (flying) return;

  flying = true;
  statusText.innerText = "Flying";

  setInterval(gameLoop, 50);
}

function thrust() {
  if (fuel <= 0) return;

  velocity += 1.5;
  fuel -= 2;
  rocket.classList.add("fire");

  setTimeout(() => rocket.classList.remove("fire"), 100);
}

function left() {
  x -= 10;
}

function right() {
  x += 10;
}

function deployParachute() {
  parachute = true;
}

function gameLoop() {
  if (!flying) return;

  // gravity
  velocity -= parachute ? 0.3 : 0.8;

  y += velocity;

  if (y < 0) {
    y = 0;

    if (velocity < -5) {
      statusText.innerText = "💥 Crashed!";
      rocket.style.background = "red";
    } else {
      statusText.innerText = "✅ Landed";
    }

    flying = false;
    return;
  }

  rocket.style.bottom = y + "px";
  rocket.style.left = "calc(50% + " + x + "px)";

  updateUI();
}
