// Substitui a propriedade console.log se ela não estiver disponível
window.console = window.console || function () {
    var o = {};
    return o.log = o.warn = o.debug = o.info = o.error = o.time = o.dir = o.profile = o.clear = o.exception = o.trace = o.assert = function () {}, o;
}(),

// Executa a função quando o documento HTML foi completamente carregado
jQuery(document).ready(function (o) {
    // Muda a folha de estilo para a cor padrão quando o link com a classe 'color1' é clicado
    o("ul.pattern .color1").click(function () {
        return o("#option-color").attr("href", "css/color/default.css"), !1;
    });

    // Muda a folha de estilo para a cor azul quando o link com a classe 'color2' é clicado
    o("ul.pattern .color2").click(function () {
        return o("#option-color").attr("href", "css/color/blue.css"), !1;
    });

    // Muda a folha de estilo para a cor verde quando o link com a classe 'color3' é clicado
    o("ul.pattern .color3").click(function () {
        return o("#option-color").attr("href", "css/color/green.css"), !1;
    });

    // Muda a folha de estilo para a cor roxa quando o link com a classe 'color4' é clicado
    o("ul.pattern .color4").click(function () {
        return o("#option-color").attr("href", "css/color/purple.css"), !1;
    });

    // Muda a folha de estilo para a cor azul-celeste quando o link com a classe 'color5' é clicado
    o("ul.pattern .color5").click(function () {
        return o("#option-color").attr("href", "css/color/skyblue.css"), !1;
    });

    // Muda a folha de estilo para a cor amarela quando o link com a classe 'color6' é clicado
    o("ul.pattern .color6").click(function () {
        return o("#option-color").attr("href", "css/color/yellow.css"), !1;
    });

    // Controla o painel de alternância de cores
    o("#color-switcher .bottom a.settings").click(function (t) {
        t.preventDefault();
        // Alterna a posição do painel de alternância de cores
        "-189px" === o("#color-switcher").css("left") ?
            o("#color-switcher").animate({ left: "0px" }) :
            o("#color-switcher").animate({ left: "-189px" });
    });

    // Atualiza a classe 'active' nos links de cores ao serem clicados
    o("ul.pattern li a").click(function (t) {
        t.preventDefault();
        o(this).parent().parent().find("a").removeClass("active");
        o(this).addClass("active");
    });

    // Inicializa o painel de alternância de cores escondido
    o("#color-switcher").animate({ left: "-189px" });
});
