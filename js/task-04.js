const form = document.querySelector(".login-form")
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const element = event.target.elements

    const emailInput = element.email.value;
    const passwordInput = element.password.value;

    const emailValue = emailInput.trim();
    const passwordValue = passwordInput.trim();
    console.log(emailValue)

    if (emailValue === '' || passwordValue === '') {
        alert`All form fields must be filled in`
    } else {
        const formInfo = {
            email: emailValue,
            password: passwordValue,
        };
        console.log(formInfo);

        form.reset();
    }
});