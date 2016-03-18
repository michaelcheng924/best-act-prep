export function setActiveTab(tab) {
    return {
        type: 'SET_ACTIVE_TAB',
        tab
    };
}

export function toggleLogin(showLogin) {
    return {
        type: 'TOGGLE_LOGIN',
        showLogin
    };
}

export function onLoginSubmitSuccess(email) {
    return {
        type: 'LOGIN_SUBMIT_SUCCESS',
        email
    };
}
