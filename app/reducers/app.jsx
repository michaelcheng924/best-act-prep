import { Map } from 'immutable';

const defaultState = Map({
    activeTab: null,
    showContact: false,
    showLogin: false,
    user: null
});

export default function appReducer(state = defaultState, action) {
    switch(action.type) {
        case 'SET_ACTIVE_TAB':
            return state.set('previousTab', state.get('activeTab')).set('activeTab', action.tab);
        case 'TOGGLE_CONTACT':
            return state.set('showContact', action.showContact);
        case 'TOGGLE_LOGIN':
            return state.set('showLogin', action.showLogin);
        case 'SET_USER':
            return state.set('user', action.email);
        case 'SET_LOGIN_ERROR_MESSAGE':
            return state.set('loginErrorMessage', action.message);
        default:
            return state;
    }
}
