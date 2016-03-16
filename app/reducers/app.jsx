import { Map } from 'immutable';
import $ from 'jquery';

const defaultState = Map({
    activeTab: null,
    showLogin: false
});

export default function appReducer(state = defaultState, action) {
    switch(action.type) {
        case 'SET_ACTIVE_TAB':
            return state.set('activeTab', action.tab);
        case 'TOGGLE_LOGIN':
            return state.set('showLogin', action.showLogin);
        default:
            return state;
    }
}
