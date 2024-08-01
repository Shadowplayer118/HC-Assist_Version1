$('.profile').click(function() {
    $('.staff-profile').show();
});

$('.close').click(function() {
    $('.staff-profile').hide();
});


$(window).click(function(event) {
    if ($(event.target).is('.staff-profile')) {
        $('.staff-profile').hide();
    }
});