import $ from 'jquery';

function updateDateTime(): void {
    const url = 'http://worldtimeapi.org/api/ip';
    $.get(url, function (data) {
        $('#current-date-time').text(data['datetime']);
    });
}

$(document).ready(function () {
    updateDateTime();
    setInterval(function () {
        updateDateTime();
     }, 60000);
});