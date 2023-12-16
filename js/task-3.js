  const nameInput = document.getElementById('name-input');
  const nameOutput = document.getElementById('name-output');

  nameInput.addEventListener('input', (event) => {
      const inputValue = event.target.value.trim();
      const outputText = inputValue === '' ? 'Anonymous' : inputValue;
    nameOutput.textContent = outputText;
  });