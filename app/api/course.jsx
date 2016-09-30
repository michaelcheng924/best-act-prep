export function fetchCourseData() {
    return $.ajax({
        url: '/api/course/fetchcoursedata',
        contentType: 'application/json'
    });
}

export function setCurrentModule(id, email) {
    return $.ajax({
        type: 'POST',
        url: `/api/course/setcurrentmodule/${id}`,
        contentType: 'application/json',
        data: JSON.stringify({ email })
    });
}

export function markComplete(id, email) {
    return $.ajax({
        type: 'POST',
        url: `/api/course/markcomplete/${id}`,
        contentType: 'application/json',
        data: JSON.stringify({ email })
    });
}
