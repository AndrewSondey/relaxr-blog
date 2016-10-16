$ (document).ready (function () {
$ ('button').on('click', function () {
   alert('We are not currently taking sign ups'); 
$ ('button').text('No Sign Ups!');
});


$('h5').css('cursor', 'pointer');


$('#first .read-more').click(function(){
    if ($('.hiddentext-1').is(':hidden')) {
    	$('.hiddentext-1').slideDown('slow');
    	$ ('#first .read-more h5').text('Read Less >');

    } else {
        $('.hiddentext-1').slideUp('slow');
        $ ('#first .read-more h5').text('Read More >');
    }
});


$('#second .read-more').click(function(){
    if ($('.hiddentext-2').is(':hidden')) {
    	$('.hiddentext-2').slideDown('slow');
    	$ ('#second .read-more h5').text('Read Less >');
    } else {
        $('.hiddentext-2').slideUp('slow');
        $ ('#second .read-more h5').text('Read More >');
    }
});


$('.sidebar-read-more').click(function(){
    if ($('.sidebar-hidden').is(':hidden')) {
    	$('.sidebar-hidden').slideDown('slow');
    	$ ('.sidebar-read-more h5').text('Learn Less');

    } else {
        $('.sidebar-hidden').slideUp('slow');
        $ ('.sidebar-read-more h5').text('Learn More');
    }
});


});