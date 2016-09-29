export function setActiveTab(tab) {
    return {
        type: 'SET_ACTIVE_TAB',
        tab
    };
}

export function toggleSupport(showSupport) {
    return {
        type: 'TOGGLE_SUPPORT',
        showSupport
    };
}

export function setSupportTopic(supportTopic) {
    return {
        type: 'SET_SUPPORT_TOPIC',
        supportTopic
    };
}

export function setSupportMessage(supportMessage, supportMessageType) {
    return {
        type: 'SET_SUPPORT_MESSAGE',
        supportMessage,
        supportMessageType
    };
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

export function setPasswordResetHash(hash, email) {
    return {
        type: 'SET_PASSWORD_RESET_HASH',
        hash,
        email
    }
}
