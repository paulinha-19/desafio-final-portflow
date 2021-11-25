$('.link-nav').on('click', 'li', function () {
    $('.link-nav li.active').removeClass('active');
    $(this).addClass('active');
})