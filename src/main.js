import Vue from 'vue'

import BaiduMap from 'vue-baidu-map'
// import ElementUI from 'element-ui';
import {Link,Tag,Cascader}  from 'element-ui'
// import { BootstrapVue } from 'bootstrap-vue'
import { NavbarPlugin } from 'bootstrap-vue'
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import App from './App.vue'
import axios from 'axios'

Vue.prototype.axios = axios

Vue.config.productionTip = false
// Vue.use(ElementUI);
Vue.use(Link)
Vue.use(Tag)
Vue.use(Cascader)
// Vue.use(BootstrapVue)
Vue.use(NavbarPlugin)
// Vue.use(IconsPlugin)
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: '你的密钥'
})
new Vue({
  render: h => h(App),
}).$mount('#app')

