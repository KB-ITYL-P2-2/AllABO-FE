import { createApp } from 'vue'
import App from './App.vue'
import './css/tailwind.css'
import router from './router/temp'

const app=createApp(App)
app.use(router)
app.mount('#app')
// createApp(App).mount('#app')
