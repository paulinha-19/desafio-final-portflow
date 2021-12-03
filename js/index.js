$('li a').click(function(e) {
    e.preventDefault();
    $('li a.active').removeClass('active');
    $(this).addClass('active');
});