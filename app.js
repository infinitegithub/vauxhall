const form = document.getElementById('form');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const storeNameInput = document.getElementById('storeName');
const storeLocationInput = document.getElementById('storeLocation');
const storeNumberInput = document.getElementById('storeNumber');
const outputDiv = document.getElementById('output');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const storeName = storeNameInput.value;
  const storeLocation = storeLocationInput.value;
  const storeNumber = storeNumberInput.value;
  let formattedStoreNumber = storeNumber;
  if (storeNumber.length === 3) {
    formattedStoreNumber = `ST0${storeNumber}`;
  } else if (storeNumber.length === 2) {
    formattedStoreNumber = `ST00${storeNumber}`;
  }
  const output = `
FIRST NAME: CC REPL OR ${firstName}
LAST NAME: ${lastName}
ADDRESS LINE 1: ${storeName} - ${storeLocation}
ADDRESS LINE 2: Address - ${formattedStoreNumber}
  `;
  outputDiv.textContent = output;
});
