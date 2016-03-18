import { Map } from 'immutable';

const defaultState = Map({
    adminUser: null
});

export default function adminReducer(state = defaultState, action) {
    switch(action.type) {
        case 'SET_ADMIN_USER':
            return state.set('adminUser', action.email);
        case 'SET_ADMIN_LOGIN_ERROR_MESSAGE':
            return state.set('loginErrorMessage', action.message);
        default:
            return state
    }
}
