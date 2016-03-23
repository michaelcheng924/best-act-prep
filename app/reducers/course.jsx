import { Map } from 'immutable';

const defaultState = Map({
    sections: Map({
        '1': { collapsed: false },
        '2': { collapsed: false },
        '3': { collapsed: false },
        '4': { collapsed: false },
        '5': { collapsed: false },
        '6': { collapsed: false },
    }),
    modules: Map({})
});

export default function courseReducer(state = defaultState, action) {
    switch(action.type) {
        case 'SET_COURSE_DATA':
            return state.set('sections', Map(action.sections)).set('modules', Map(action.modules));
        case 'TOGGLE_SECTION':
            return toggleSection(state, action);
        default:
            return state;
    }
}

function toggleSection(state, action) {
    const nextSections = state.get('sections');
    const sectionToToggle = nextSections.get(action.id);
    console.log(state, nextSections, sectionToToggle, action.id);
    sectionToToggle.set('collapsed', !sectionToToggle.collapsed);
    return state.set('sections', nextSections);
}
