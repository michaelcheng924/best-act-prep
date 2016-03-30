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
            const { sections, modules, currentModule } = action.userData;

            return state.set('sections', sections)
                .set('modules', modules)
                .set('currentModule', currentModule);
        case 'SET_MODULES':
            return state.set('modules', action.modules);
        case 'SET_CURRENT_MODULE':
            return state.set('currentModule', action.id);
        case 'TOGGLE_SECTION':
            return toggleSection(state, action);
        case 'TOGGLE_MODULES':
            return toggleModules(state, action);
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

function toggleModules(state, action) {
    const nextModules = state.get('modules');
    return state.set('modules', nextModules.updateIn([action.id], module => {
        return module.set('collapsed', !module.get('collapsed'));
    }));
}
