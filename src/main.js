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

const app = createApp(App);
app.mount('#app');

app.config.globalProperties.window = window;
app.config.globalProperties.Document = window.document;
app.config.globalProperties.history = window.history;
app.config.globalProperties.JQuery = window.$;
