

$(document).ready(function(){
    const menu = $(".menu");     // Creamos la variable home y apuntamos a donde llamamos
    const carta = $(".carta");
    const proyects = $(".proyects");
    const contact = $(".contact");
    let idMenu = $("#idMenu");   // Creamos la variable id.Home y apuntamos a donde llamamos
    let idCarta = $("#idCarta");
    let idProyects = $("#idProyects");
    let idContact = $("#idContact");


    idMenu.on("click",function(e){                // funcion para el boton HOME
        e.preventDefault();
        $("html,body").animate({
            scrollTop: menu.offset().top},800);
    });

    idCarta.on("click",function(e){                   // funcion para el boton carta
        e.preventDefault();
        $("html,body").animate({
            scrollTop: carta.offset().top},800);
    });

    idProyects.on("click",function(e){                       // funcion para el boton Trayectoria
        e.preventDefault();
        $("html,body").animate({
            scrollTop: proyects.offset().top},800);
    });

    idContact.on("click",function (e) {                     // funcion para el boton Proyectos
        e.preventDefault();
        $("html,body").animate({
            scrollTop: contact.offset().top},800);
    });



    $(function (){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.mainNav').addClass("colorMainScroll").addClass('navRight0').removeClass('navRight20');
            } else {
                $(".mainNav").removeClass("colorMainScroll").addClass('navRight20').removeClass('navRight0');
            }
        });
    });

});



//
// $(function(){
//
//     $('a[href*=#]').click(function() {
//
//         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
//             && location.hostname == this.hostname) {
//
//             var $target = $(this.hash);
//
//             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
//
//             if ($target.length) {
//
//                 var targetOffset = $target.offset().top;
//
//                 $('html,body').animate({scrollTop: targetOffset}, 1000);
//
//                 return false;
//
//             }
//
//         }
//
//     });
//
// });