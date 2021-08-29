import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import VueAxios from 'vue-axios'

import { Col, Row , Field, CellGroup,Icon,Swipe, SwipeItem,Picker,Popup,Button,Tab,Tabs } from 'vant';
Vue.use(VueAxios,Axios)
Vue.use(Col)
Vue.use(Row)
Vue.use(Field)
Vue.use(CellGroup)
Vue.use(Icon)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Picker)
Vue.use(Popup)
Vue.use(Button)
Vue.use(Tab);
Vue.use(Tabs);
Vue.config.productionTip = false
//Vue.axios.defaults.timeout = 6000;
///Vue.axios.defaults.withCredentials = true


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
