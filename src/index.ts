import $ from 'jquery';

function updateDateTime(): void {
    const url = 'https://worldtimeapi.org/api/ip';
    $.get(url, function (data) {
        $('#current-date-time').text(data['datetime']);
    });
}

$(document).ready(function () {
    updateDateTime();
    setInterval(function () {
        updateDateTime();
    }, 1000);
});