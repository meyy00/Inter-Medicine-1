/*-----------------------------------------------------------
* Template Name    : Kerri | Responsive Bootstrap 4 Personal Template
* Author           : SRBThemes
* Version          : 1.0.0
* Created          : March 2018
* File Description : Main Js file of the template
*------------------------------------------------------------
*/
// Adiciona uma classe a um elemento quando a página é rolada por pelo menos 50 pixels
$(window).on("scroll", function () {
    $(window).scrollTop() >= 50 ? $(".sticky").addClass("stickyadd") : $(".sticky").removeClass("stickyadd");
});

// Colapsa a barra de navegação quando um link é clicado
$(document).on("click", ".navbar-collapse.show", function (e) {
    $(e.target).is("a") && $(this).collapse("hide");
});

// Rolagem suave até uma seção quando um link de navegação é clicado
$(".navbar-nav a, .scroll_down a").on("click", function (e) {
    var alvo = $(this);
    $("html, body").stop().animate({
        scrollTop: $(alvo.attr("href")).offset().top - 0
    }, 1500, "easeInOutExpo");
    e.preventDefault();
});

// Ativa o spy de rolagem na barra de navegação com uma compensação especificada
$("#navbarCollapse").scrollspy({ offset: 20 });

// Inicializa uma animação de digitação para elementos com a classe "element"
$(".element").each(function () {
    var elemento = $(this);
    elemento.typed({
        strings: elemento.attr("data-elements").split(","),
        typeSpeed: 100,
        backDelay: 3000
    });
});

// Filtragem Isotope para uma seção de portfólio ou galeria
$(window).on("load", function () {
    var filtroTrabalho = $(".work-filter"),
        menuFiltro = $("#menu-filter");

    filtroTrabalho.isotope({
        filter: "*",
        layoutMode: "masonry",
        animationOptions: {
            duration: 750,
            easing: "linear"
        }
    });

    menuFiltro.find("a").on("click", function () {
        var valorFiltro = $(this).attr("data-filter");
        menuFiltro.find("a").removeClass("active");
        $(this).addClass("active");
        filtroTrabalho.isotope({
            filter: valorFiltro,
            animationOptions: {
                animationDuration: 750,
                easing: "linear",
                queue: false
            }
        });
        return false;
    });
});

// Magnific Popup para zoom de imagem
$(".img-zoom").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    mainClass: "mfp-fade",
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    }
});

// Owl Carousel para um slider
$("#owl-demo").owlCarousel({
    autoPlay: 7000,
    stopOnHover: true,
    navigation: false,
    paginationSpeed: 1000,
    goToFirstSpeed: 2000,
    singleItem: true,
    autoHeight: true
});

// Oculta um preloader e mostra o conteúdo da página após um atraso
$("#status").fadeOut();
$("#preloader").delay(350).fadeOut("slow");
$("body").delay(350).css({ overflow: "visible" });

// Mostra/oculta um botão "voltar ao topo" com base na posição de rolagem
$(window).on("scroll", function () {
    $(this).scrollTop() > 100 ? $(".back_top").fadeIn() : $(".back_top").fadeOut();
});

// Rola até o topo quando o botão "voltar ao topo" é clicado
$(".back_top").click(function () {
    return $("html, body").animate({ scrollTop: 0 }, 1000), false;
});

// Efeito Wavify em um elemento com o ID "wave_img"
$("#wave_img").length && $("#wave_img").wavify({
    height: 100,
    bones: 3,
    amplitude: 50,
    color: "#fff",
    speed: 0.25
});
