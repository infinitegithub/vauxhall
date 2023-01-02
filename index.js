const form = document.querySelector("form");
const resultDiv = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = form.elements.firstName.value;
  const lastName = form.elements.lastName.value;
  const addressLine1 = form.elements.addressLine1.value;
  const addressLine2 = form.elements.addressLine2.value;
  const storeNumber = form.elements.storeNumber.value;
  const orderNumber = form.elements.orderNumber.value;

  const formattedFirstName = `CC REPL OR${orderNumber}`;
  const formattedLastName = lastName;
  const formattedAddressLine1 = `${addressLine1} – ${storeNumber}`;
  const formattedAddressLine2 = `${addressLine2} – ${storeNumber}`;

  resultDiv.innerHTML = `
    <p>${formattedFirstName}</p>
    <p>${formattedLastName}</p>
    <p>${formattedAddressLine1}</p>
    <p>${formattedAddressLine2}</p>
  `;
});
