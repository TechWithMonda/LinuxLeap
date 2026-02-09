import { createApp } from 'vue'
import App from './App.vue'
import { inject } from '@vercel/analytics' // 1. Import the function

const app = createApp(App)

// 2. Initialize Vercel Analytics
inject() 

app.mount('#app')