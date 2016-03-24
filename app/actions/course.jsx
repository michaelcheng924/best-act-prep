export function setCourseData(data) {
    return {
        type: 'SET_COURSE_DATA',
        data
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
