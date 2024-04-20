const fahrenheit = Number(prompt('Zadajte teplotu v stupňoch Fahrenheita'));

const celsium01 = Number((fahrenheit - 32) * 5 / 9);
const celsium02 = Math.round(celsium01 * 100) / 100;

document.body.innerHTML = (`Vaša teplota je ${celsium02} stupňov Celsia.`)