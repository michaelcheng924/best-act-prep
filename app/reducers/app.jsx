import { Map } from 'immutable';

const defaultState = Map({
    activeTab: null,
    showSupport: false,
    supporTopic: null,
    supportMessage: null,
    supportMessageType: null,
    showLogin: false,
    user: null
});

export default function appReducer(state = defaultState, action) {
    switch(action.type) {
        case 'SET_ACTIVE_TAB':
            return state.set('previousTab', state.get('activeTab')).set('activeTab', action.tab);
        case 'TOGGLE_SUPPORT':
            return state.set('showSupport', action.showSupport);
        case 'SET_SUPPORT_TOPIC':
            return state.set('supportTopic', action.supportTopic);
        case 'SET_SUPPORT_MESSAGE':
            return state.set('supportMessage', action.supportMessage).set('supportMessageType', action.supportMessageType);
        case 'TOGGLE_LOGIN':
            return state.set('showLogin', action.showLogin);
        case 'SET_USER':
            return state.set('user', action.email);
        case 'SET_LOGIN_ERROR_MESSAGE':
            return state.set('loginErrorMessage', action.message);
        case 'SET_PASSWORD_RESET_HASH':
            return state.set('passwordResetHash', action.hash).set('passwordResetEmail', action.email);
        default:
            return state;
    }
}
