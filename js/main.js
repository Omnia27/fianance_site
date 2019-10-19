$(function () { 
    $(".icon").click(function(){
      $("ul.nav-right").toggle();
    });
    $(window).on('load', function(){
        $(".loading-overlay .spinner").fadeOut(1000,function(){
            $(this).parent().fadeOut(1000,function(){
                $(this).remove();
                $("body").css("overflow","auto");
            });
        });
       
    });

new WOW().init();


});
