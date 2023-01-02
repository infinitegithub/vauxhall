// Select form element and result div from the DOM
const form = document.querySelector("form");
const resultDiv = document.querySelector("#result");

/**
 * Formats the input values according to the specified format.
 * @param {string} firstName - The first name of the customer.
 * @param {string} lastName - The last name of the customer.
 * @param {string} storeName - The name of the store.
 * @param {string} location - The location of the store.
 * @param {string} address - The address of the store.
 * @param {string} storeNumber - The store number.
 * @param {string} orderNumber - The order number.
 * @returns {string} The formatted output.
 */
function formatInput(firstName, lastName, storeName, location, address, storeNumber, orderNumber) {
  // Format first name
  const formattedFirstName = `CC REPL OR${orderNumber}`;
  // Use last name as-is
  const formattedLastName = lastName;
  // Format address line 1
  const formattedAddressLine1 = `${storeName}_${location}`;
  // Format address line 2
  const formattedAddressLine2 = `${address} – ${storeNumber}`;

  // Return formatted output as string
  return `
    <p>${formattedFirstName}</p>
    <p>${formattedLastName}</p>
    <p>${formattedAddressLine1}</p>
    <p>${formattedAddressLine2}</p>
  `;
}

/**
 * Handles form submission.
 * @param {Event} event - The form submission event.
 */
function handleFormSubmit(event) {
  // Prevent default form submission behavior
  event.preventDefault();

  // Get values of input fields and trim leading/trailing whitespace
  const firstName = form.elements.firstName.value.trim();
  const lastName = form.elements.lastName.value.trim();
  const storeName = form.elements.storeName.value.trim();
  const location = form.elements.location.value.trim();
  const address = form.elements.address.value.trim();
  const storeNumber = form.elements.storeNumber.value.trim();
  const orderNumber = form.elements.order
