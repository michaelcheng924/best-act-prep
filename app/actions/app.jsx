export function setActiveTab(tab) {
    return {
        type: 'SET_ACTIVE_TAB',
        tab
    };
}

export function toggleContact(showContact) {
    return {
        type: 'TOGGLE_CONTACT',
        showContact
    }
}

export function toggleLogin(showLogin) {
    return {
        type: 'TOGGLE_LOGIN',
        showLogin
    };
}

export function setUser(email) {
    return {
        type: 'SET_USER',
        email
    };
}

export function setLoginErrorMessage(message) {
    return {
        type: 'SET_LOGIN_ERROR_MESSAGE',
        message
    };
}
