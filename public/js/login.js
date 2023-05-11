const loginForm = $('#login-form');
const emailInput = $('#login-email');
const passwordInput = $('#login-pw');

loginForm.on('submit', (event) => {
    event.preventDefault();
    const data = {
        email: emailInput.val(),
        passwordInput: passwordInput.val()
    }

    // const response = fetch('/api/user/login', {
    //     method: 'POST',
    //     body: JSON.stringify(data),
    //     headers: {
    //         'Content'
    //     }
    // })
})