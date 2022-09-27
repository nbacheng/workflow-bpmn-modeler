
import Vue from 'vue'
import App from './Demo.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//for highlightjs add by nbchang 2022-09-20
import highlightPlugin from "@highlightjs/vue-plugin";
import 'highlight.js/styles/dark.css'; // 引入内置样式

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(highlightPlugin);//for highlightjs add by nbchang 2022-09-20

new Vue({
  render: h => h(App)
}).$mount('#app')
