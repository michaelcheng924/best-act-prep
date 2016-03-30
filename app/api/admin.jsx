export function authenticate(path) {
    return $.ajax({
        type: 'POST',
        url: '/api/admin/authenticate',
        contentType: 'application/json'
    });
}

export function onAdminLoginSubmit(email, password) {
    return $.ajax({
        type: 'POST',
        url: '/api/admin/login',
        contentType: 'application/json',
        data: JSON.stringify({ email, password })
    });
}

export function logout() {
    return $.ajax({
        type: 'POST',
        url: '/api/admin/logout',
        contentType: 'application/json'
    });
}
