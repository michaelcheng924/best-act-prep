export function authenticate(path) {
    return $.ajax({
        type: 'POST',
        url: '/api/app/authenticate',
        contentType: 'application/json',
        data: JSON.stringify({ path })
    });
}

export function onLoginSubmit(email, password) {
    return $.ajax({
        type: 'POST',
        url: '/api/app/login',
        contentType: 'application/json',
        data: JSON.stringify({ email, password })
    });
}

export function logout() {
    return $.ajax({
        type: 'POST',
        url: '/api/app/logout',
        contentType: 'application/json'
    });
}

export function onToken(token, amount) {
    return $.ajax({
        type: 'POST',
        url: '/api/app/buycourse',
        contentType: 'application/json',
        data: JSON.stringify({ token, amount })
    });
}

export function onSetPasswordSubmit(email, password) {
    return $.ajax({
        type: 'POST',
        url: '/api/app/setpassword',
        contentType: 'application/json',
        data: JSON.stringify({ email, password })
    });
}
