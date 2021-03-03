function darkmode() {
    /* Selecciona BODY y aplica clase */
    var cuerpo = document.body;
    cuerpo.classList.toggle("darkmode");
    /* Selecciona el BUSCADOR y aplica clase */
    var searcherconfig = document.getElementById("searcherconfig");
    searcherconfig.classList.toggle("searcherconfigdark");
    /* Selecciona ICONOS user, carrito y darkmode y aplica clase */
    var user1 = document.getElementById("user1");
    user1.classList.toggle("user1dark");
    var user2 = document.getElementById("user2");
    user2.classList.toggle("user2dark");
    var user3 = document.getElementById("user3");
    user3.classList.toggle("user3dark");
    /* Selecciona NAVEGACIÓN y aplica clase */
    var navdark = document.getElementById("navegationdark");
    navdark.classList.toggle("navdark");
    /* Selecciona DESCUENTO y aplica clase */
    var descuento = document.getElementById("mostrarOcultar");
    descuento.classList.toggle("descuentodark");
    /* Selecciona los H2 del FOOTER y aplica clase */
    var footerh2_1 = document.getElementById("h2f1");
    footerh2_1.classList.toggle("h2dark1");
    var footerh2_2 = document.getElementById("h2f2");
    footerh2_2.classList.toggle("h2dark2");
    var footerh2_3 = document.getElementById("h2f3");
    footerh2_3.classList.toggle("h2dark3");
    var footerh2_4 = document.getElementById("h2f4");
    footerh2_4.classList.toggle("h2dark4");
    /* BLACKLINE CAMBIADA A BLANCO */
    var blackline = document.getElementById("blackline");
    blackline.classList.toggle("blacklinedark");
    /* CAMBIA COLOR FOOTER */
    var footerbg = document.getElementById("footerbg");
    footerbg.classList.toggle("footerbgdark");



}