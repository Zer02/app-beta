import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import firebase from 'firebase/app'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAJjBlwupLYg6J1x_D3vXmTR5qrmGYPmJw",
  authDomain: "app-beta-8a814.firebaseapp.com",
  databaseURL: "https://app-beta-8a814.firebaseio.com",
  projectId: "app-beta-8a814",
  storageBucket: "app-beta-8a814.appspot.com",
  messagingSenderId: "817644424433",
  appId: "1:817644424433:web:8c8038d71ae1bb01e32d50"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
