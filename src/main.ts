import './registerServiceWorker';
import '@/assets/scss/index.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.mount('#app');
