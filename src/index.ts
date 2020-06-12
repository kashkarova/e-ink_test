import $ from 'jquery';

function updateDateTime(): void {
    const url = 'http://worldtimeapi.org/api/ip';
    $.get(url, function (data) {
        $('#current-date-time').text(data['datetime']);
    });
}

$(document).ready(function () {

    var updateDateTimePromise = new Promise((resolve, reject) => {
        updateDateTime();
        setInterval(function () {
            updateDateTime();
            resolve();
         }, 1000);
    });
    updateDateTimePromise.then(() => {
        console.log("Success!");
    });
});