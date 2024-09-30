import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './css/tailwind.css'
import router from './router/temp'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart as faHeart1 } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeart2 } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeart3 } from '@fortawesome/free-regular-svg-icons/faHeart'
import { faHeart as faHeart4 } from '@fortawesome/free-solid-svg-icons/faHeart'

library.add(faHeart1, faHeart2, faHeart3, faHeart4)

const app=createApp(App)
const pinia = createPinia()

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(pinia)
app.use(router)
app.mount('#app')
// createApp(App).mount('#app')
