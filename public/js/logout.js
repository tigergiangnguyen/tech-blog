const logoutButton = $('#logout');

logoutButton.click(async (event) => {
    await fetch('/api/users/logout', {
        method: 'POST'
    });

    const responseData = await response.json();
})