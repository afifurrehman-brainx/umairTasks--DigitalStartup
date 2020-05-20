$(document).ready(function () {
    var countDownDate = new Date("May 22, 2020 23:59:59").getTime();
    var x = setInterval(function () {

        var now = new Date().getTime();

        var offset = new Date().getTimezoneOffset();// getting offset to make time in gmt+0 zone (UTC) (for gmt+5 offset comes as -300 minutes)
        var date = new Date();
        date.setMinutes(date.getMinutes() + offset);// date now in UTC time

        var easternTimeOffset = -240; //for dayLight saving, Eastern time become 4 hours behind UTC thats why its offset is -4x60 = -240 minutes. So when Day light is not active the offset will be -300
        date.setMinutes(date.getMinutes() + easternTimeOffset);

        var distance = countDownDate - date;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours.toLocaleString(undefined, { minimumIntegerDigits: 2 });
        document.getElementById("minutes").innerHTML = minutes.toLocaleString(undefined, { minimumIntegerDigits: 2 });
        document.getElementById("seconds").innerHTML = seconds.toLocaleString(undefined, { minimumIntegerDigits: 2 });

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);


    $("#buy-ticket").click(function (e) {
        e.preventDefault();
        $('#menuModal').modal('hide');
        setTimeout(function () {
            window.location.href = '#section-7';
        }, 400);

        // window.location.href = '#section-7';
    });

    $("#become-sponser").click(function (e) {
        e.preventDefault();
        $('#menuModal').modal('hide');
        setTimeout(function () {
            window.location.href = '#section-6';
        }, 400);

        // window.location.href = '#section-7';
    });

    $('.show-speaker-description').click(function () {
        let speakerAvatar = $(this).data('avatar-url');
        let name = $(this).data('name');
        let profession = $(this).data('profession');
        let description = $(this).data('description');
        $("#speakersModal .speaker-avatar").attr('src', speakerAvatar);
        $("#speakersModal .speaker-name").text(name);
        $("#speakersModal .speaker-profession").text(profession);
        $("#speakersModal .speaker-description").text(description);

    });

});
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    var position = $($(this).attr("href")).offset().top - 121;

    $("body, html").animate({
        scrollTop: position
    }, 500,
        'linear');
});