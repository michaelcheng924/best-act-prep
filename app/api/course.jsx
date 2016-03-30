export function markComplete(id) {
    return $.ajax({
        type: 'POST',
        url: `/api/course/markcomplete/${id}`,
        contentType: 'application/json'
    });
}
