import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './components/GlobalState.js';

const app = createApp(App);
app.provide("store", store);
app.mount('#app')
