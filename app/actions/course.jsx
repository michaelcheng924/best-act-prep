export function setCourseData(userData) {
    return {
        type: 'SET_COURSE_DATA',
        userData
    };
}

export function optimisticMarkComplete(id) {
    return {
        type: 'MARK_COMPLETE',
        id
    };
}

export function optimisticSetCurrentModule(id) {
    return {
        type: 'SET_CURRENT_MODULE',
        id
    };
}

export function toggleSection(id) {
    return {
        type: 'TOGGLE_SECTION',
        id
    };
}

export function toggleModules(id) {
    return {
        type: 'TOGGLE_MODULES',
        id
    };
}
