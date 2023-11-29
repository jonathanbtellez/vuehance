import { createApp } from 'vue'
import './assets/sass/app.scss'
import windowVars from "@/config/WindowVars";
import App from './App.vue'
import router from './router'
import store from './store'

windowVars()

createApp(App).use(store).use(router).mount('#app')
