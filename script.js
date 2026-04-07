const rocket = document.getElementById('rocket');
const launchButton = document.getElementById('launchButton');
const fuel = document.getElementById('fuel');
const altitudeValue = document.getElementById('altitudeValue');
const status = document.getElementById('status');

let altitude = 0;
let fuelValue = 100;

launchButton.addEventListener('click', () => {
    if (fuelValue > 0) {
        status.textContent = 'Status: Flying';
        const rocketAnimation = setInterval(() => {
            rocket.style.bottom = `${altitude}px`;
            altitude += 10;
            altitudeValue.textContent = altitude;
            fuelValue -= 1;
            fuel.textContent = fuelValue;
            if (altitude >= 500) {
                clearInterval(rocketAnimation);
                status.textContent = 'Status: Landed';
            }
        }, 100);
    } else {
        status.textContent = 'Status: Out of fuel';
    }
});}});
