const nameInput = document.querySelector("#name-input")
const nameOutput = document.querySelector("#name-output")
nameInput.addEventListener('input', (event) => {
    const inputValue = event.target.value.trim();
    const outputText = inputValue === '' ? 'Anonymous' : inputValue;
    nameOutput.textContent = outputText;
  });