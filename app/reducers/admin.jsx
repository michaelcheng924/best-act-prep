import { Map, List } from 'immutable';

const defaultState = Map({
    adminUser: null,
    users: null
});

export default function adminReducer(state = defaultState, action) {
    switch(action.type) {
        case 'SET_ADMIN_USER':
            return state.set('adminUser', action.email);
        case 'SET_ADMIN_LOGIN_ERROR_MESSAGE':
            return state.set('loginErrorMessage', action.message);
        case 'SET_USERS':
            return state.set('users', List(action.users));
        case 'SET_LOGS':
            return state.set('logs', List(action.logs));
        default:
            return state
    }
}
