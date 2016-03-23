import $ from 'jquery';

export function fetchCourseData(email) {
    return $.ajax({
        url: '/api/course/fetchdata',
        contentType: 'application/json',
        data: JSON.stringify({ email })
    });
}
