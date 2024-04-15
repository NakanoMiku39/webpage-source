import { createApp } from 'vue'
import Brief from './Brief.vue'
import Contents from './Contents.vue'
import './index.css'

createApp(Brief).mount('#brief')
createApp(Contents).mount('#contents')
