import $ from 'jquery';

export function fetchCourseData(email) {
    return $.ajax({
        url: `/api/course/fetchdata/${encodeURIComponent(email)}`,
        contentType: 'application/json'
    });
}
