import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AppHeader from './components/AppHeader.vue';

const app = createApp(App);

app.component('AppHeader', AppHeader)
app.mount('#app');