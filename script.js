const form = document.getElementById('form');
const orderNumberInput = document.getElementById('orderNumber');
const lastNameInput = document.getElementById('lastName');
const storeNameInput = document.getElementById('storeName');
const storeLocationInput = document.getElementById('storeLocation');
const storeNumberInput = document.getElementById('storeNumber');
const outputDiv = document.getElementById('output');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const orderNumber = orderNumberInput.value;
  const lastName = lastNameInput.value;
  const storeName = storeNameInput.value;
  const storeLocation = storeLocationInput.value;
  let storeNumber = storeNumberInput.value;
  if (storeNumber.length === 3) {
    storeNumber = `ST0${storeNumber}`;
  } else if (storeNumber.length === 2) {
    storeNumber = `ST00${storeNumber}`;
  }
  const formattedAddress = `
FIRST NAME: CC REPL OR ${orderNumber}
LAST NAME: ${lastName}
ADDRESS LINE 1: ${storeName} - ${storeLocation}
ADDRESS LINE 2: ${storeNumber}
  `;
  outputDiv.textContent = formattedAddress;
});
