
import Vue from 'vue'
import App from './App'
import './assets/styles/app.css'
import router from './router'
import BaseInput from './components/UI/BaseInput.vue'
import BaseCard from './components/UI/BaseCard.vue'
import store from './store'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false
Vue.component('base-input',BaseInput);
Vue.component('base-card',BaseCard);
Vue.use(VModal);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
