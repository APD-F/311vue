import Vue from 'vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
    vuetify,
}).$mount('#app')
