import { Map, fromJS } from 'immutable';

const defaultState = fromJS({
    sections: {
        '1': { collapsed: false },
        '2': { collapsed: false },
        '3': { collapsed: false },
        '4': { collapsed: false },
        '5': { collapsed: false },
        '6': { collapsed: false },
        '7': { collapsed: false }
    },
    modules: {}
});

export default function courseReducer(state = defaultState, action) {
    switch(action.type) {
        case 'SET_COURSE_DATA':
            return fromJS(action.data);
        case 'TOGGLE_SECTION':
            return toggleSection(state, action);
        default:
            return state;
    }
}

function toggleSection(state, action) {
    const nextSections = state.get('sections');
    return state.set('sections', nextSections.updateIn([action.id], section => {
        return section.set('collapsed', !section.get('collapsed'));
    }));
}
