$(function($) {
    let url = window.location.href;
    $('nav ul li a').each(function() {
        if (this.href === url) {
            $(this).closest('li').addClass('active');
        }
    });
});