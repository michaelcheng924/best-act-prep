export function setAdminUser(email) {
    return {
        type: 'SET_ADMIN_USER',
        email
    };
}

export function setAdminLoginErrorMessage(message) {
    return {
        type: 'SET_ADMIN_LOGIN_ERROR_MESSAGE',
        message
    };
}

export function setUsers(users) {
    return {
        type: 'SET_USERS',
        users
    };
}

export function setLogs(logs) {
    return {
        type: 'SET_LOGS',
        logs
    };
}
