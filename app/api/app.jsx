export function authenticate(path, token) {
    return $.ajax({
        type: 'POST',
        url: '/api/app/authenticate',
        contentType: 'application/json',
        data: JSON.stringify({ path, token })
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

export function onSupportSubmit(supportTopic, email, textarea) {
    return $.ajax({
        type: 'POST',
        url: 'api/app/support',
        contentType: 'application/json',
        data: JSON.stringify({ supportTopic, email, textarea })
    });
}

export function onPasswordResetRequestSubmit(email) {
    return $.ajax({
        type: 'POST',
        url: 'api/app/passwordresetrequest',
        contentType: 'application/json',
        data: JSON.stringify({ email })
    });
}

export function onPasswordResetSubmit(password, email) {
    return $.ajax({
        type: 'POST',
        url: 'api/app/passwordreset',
        contentType: 'application/json',
        data: JSON.stringify({ password, email })
    });
}
