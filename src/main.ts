import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Sad from './components/Sad.vue'
import Kepler from './components/Kepler.vue'

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        { path: '/', component: Sad },
        { path: '/kepler', component: Kepler }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
