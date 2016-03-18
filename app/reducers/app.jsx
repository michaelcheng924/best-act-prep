import { Map } from 'immutable';

const defaultState = Map({
    activeTab: null,
    showLogin: false,
    user: null
});

export default function appReducer(state = defaultState, action) {
    switch(action.type) {
        case 'SET_ACTIVE_TAB':
            return state.set('previousTab', state.get('activeTab')).set('activeTab', action.tab);
        case 'TOGGLE_LOGIN':
            return state.set('showLogin', action.showLogin);
        case 'SET_USER':
            return state.set('user', action.email);
        default:
            return state;
    }
}
