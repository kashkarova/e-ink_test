import $ from 'jquery';

function updateDateTime(): void {
    const url = 'https://worldtimeapi.org/api/ip';
    $.get(url, function (data) {
        $('#current-date-time').text(data['datetime']);
    });
}

$(document).ready(function () {

    var makeRequest = async () => {
        await updateDateTime()
        console.log('done!');
    }

    makeRequest();
    setInterval(function () {
        makeRequest();
    }, 60000);
});