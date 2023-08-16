$(document).ready(function(){
    $('.navbar-toggler-open').click(function(){
        $('.navbar-collapse').addClass('navbarShow');
    });

    $('.navbar-toggler-close').click(function(){
        $('.navbar-collapse').removeClass('navbarShow');
    });

    let resizeTimer;
    $(window).resize(function(){
        $(document.body).addClass('resize-transition-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function(){
            $(document.body).removeClass('resize-transition-stopper');
        }, 400);
    });

    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate(keyframes = {
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, Options = 2000);
    });

    $('#up').on('click', function () {
        $('html, body').animate(keyframes = {
            scrollTop: 0
        }, Options = 2000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
});


$(document).ready(function(){
    $('.acc .accent-wrapper').click(function(){
        $('.acc .accent-wrapper').removeClass("checked");
        $(this).addClass("checked");


        var selectedreview = $(this).attr("data-checker");
        $('.right').removeClass("active").hide();

        $('.right.' + selectedreview).addClass("active").show();
    });
});

let more =document.querySelectorAll('.more');
for (let i = 0; i<more.length; i++){
    more[i].addEventListener('click', function(){
        more[i].parentNode.classList.toggle('active')
    })
}