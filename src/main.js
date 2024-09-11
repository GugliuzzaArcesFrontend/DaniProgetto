import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

// import 'jquery/dist/jquery.min.js';
// import 'jquery/dist/jquery.slim.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import "@fortawesome/fontawesome-free/css/all.css";
// import "@fortawesome/fontawesome-free/js/all.js";
// import '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/free-brands-svg-icons';
// import '@fortawesome/free-regular-svg-icons';
// import 'admin-lte/dist/js/adminlte.min.js';
// import 'admin-lte/dist/css/adminlte.min.css';
// import $ from 'jquery';

const app = createApp(App);
app.mount('#app');

app.config.globalProperties.window = window;
app.config.globalProperties.Document = window.document;
app.config.globalProperties.history = window.history;
app.config.globalProperties.JQuery = window.$;

/* $.AdminLTE.CardWidget.prototype.collapse = function () {
    const card = $(this._parent);
    const cardBody = card.find('.card-body');

    // Usa classi Bootstrap invece di manipolare gli stili inline
    cardBody.toggleClass('d-none'); // Cambia la visibilità con classi Bootstrap (d-none nasconde l'elemento)

    // Aggiungi la classe collapsed-card per indicare che la card è collassata
    card.addClass('collapsed-card');

    // Emetti un evento personalizzato (utile se hai listeners)
    card.trigger($.Event('collapsed.lte.cardwidget'));
};

// Ripristina il metodo expand per espandere correttamente le card
$.AdminLTE.CardWidget.prototype.expand = function () {
    const card = $(this._parent);
    const cardBody = card.find('.card-body');

    // Rimuovi la classe d-none per mostrare la card
    cardBody.removeClass('d-none');

    // Rimuovi la classe collapsed-card per indicare che la card è espansa
    card.removeClass('collapsed-card');

    // Emetti un evento personalizzato (utile se hai listeners)
    card.trigger($.Event('expanded.lte.cardwidget'));
}; */