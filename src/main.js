import Vue from 'vue'
import HomePage from './HomePage.vue'
import vueCustomElement from 'vue-custom-element';

// new Vue({
//   el: '#home-page',
//   render: h => h(HomePage)
// })

Vue.config.ignoredElements = [
  'home-page'
];

Vue.use(vueCustomElement);

Vue.customElement('home-page', HomePage, {});