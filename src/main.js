import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Content from './Content.vue'
import Footer from './Footer.vue'

Vue.component('header',Header);
Vue.component('content',Content);
Vue.component('footer',Footer);


new Vue({
  el: '#app',
  render: h => h(App)
})
