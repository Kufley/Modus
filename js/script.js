$('#slider-screens').carousel({
    interval: 0
});
$(document).scroll(function(){
    if($(this).scrollTop()>1) {
        $('.navbar-default').css({'background-color': '#0b7abf'});
        $('.gray-bg').css({'display': 'none'});
        $('.blue-bg').css({'display': 'block'});
        $('.navbar-default .navbar-nav li a').css({'color': '#fff'});
    } else {
    $('.navbar-default').css({'background-color': '#fff'});
    $('.gray-bg').css({'display': 'block'});
    $('.blue-bg').css({'display': 'none'});
    $('.navbar-default .navbar-nav li a').css({'color': '#666'});}
    $('.navbar-default .navbar-nav .link-order-now a ').css({'color': '#fff'});
});
