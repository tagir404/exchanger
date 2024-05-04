import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import AppContainer from '@/components/AppContainer.vue'
import { register } from 'swiper/element/bundle'

createApp(App).component('AppContainer', AppContainer).mount('#app')

register()
