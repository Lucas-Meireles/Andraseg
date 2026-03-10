function validateLogin(event) {
    event.preventDefault();

    var username = $('#username').val();
    var password = $('#password').val();

    if (username === 'admin' && password === 'admin') {
        window.location.href = 'download.html';
    } else if (username === 'admin2' && password === 'admin2') {
        window.location.href = 'visualizar.html';
    } else {
        $('#error-message').text('Credenciais incorretas. Por favor, tente novamente.');
    }
}

$(document).ready(function() {
    $('.js-tilt').tilt({
        scale: 1.1
    });

    $('.login100-form').on('submit', validateLogin);
});
