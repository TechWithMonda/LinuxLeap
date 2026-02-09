import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import { Analytics } from "@vercel/analytics/next"

createApp(App).use(Analytics).mount('#app')