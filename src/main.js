import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

/* Dependencies */
/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//import { all } from '@awesome.me/kit-KIT_CODE/icons'
//library.add(...all)

const app = createApp(App);
app.mount('#app');
app.component('font-awesome-icon', FontAwesomeIcon)
