$(() => {
    $('.partner-logo').on('click', function () {
        $(this).siblings('.popin').addClass('-display');
        $('.overlay').addClass('-display');
        $('.close-btn').addClass('-display');
        $('body').addClass('overflow');
    })
})

// CLICK OUTSIDE POPIN TO CLOSE
$(document).click((event) => {
    if ((!$(event.target).closest(".popin__container, .partner-logo").length)) {
        $('.popin').removeClass('-display');
        $('.overlay').removeClass('-display');
        $('.close-btn').removeClass('-display');
        $('body').removeClass('overflow');
    }
});