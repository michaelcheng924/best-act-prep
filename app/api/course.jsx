export function fetchCourseData() {
    return $.ajax({
        url: '/api/course/fetchcoursedata',
        contentType: 'application/json'
    });
}

export function markComplete(id) {
    return $.ajax({
        type: 'POST',
        url: `/api/course/markcomplete/${id}`,
        contentType: 'application/json'
    });
}
