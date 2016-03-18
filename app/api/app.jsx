import $ from 'jquery';

export function authenticate(path) {
    return $.ajax({
        type: 'POST',
        url: '/api/authenticate',
        contentType: 'application/json',
        data: JSON.stringify({ path })
    });
}

export function onLoginSubmit(email, password) {
    return $.ajax({
        type: 'POST',
        url: '/api/login',
        contentType: 'application/json',
        data: JSON.stringify({ email, password })
    });
}

export function onToken(token) {
    return $.ajax({
        type: 'POST',
        url: '/api/buycourse',
        contentType: 'application/json',
        data: JSON.stringify(token)
    });
}
