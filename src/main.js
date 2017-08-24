import Vue from 'vue'
import router from './config/router'
import App from './App.vue'

new Vue({
	router,
	el: '#app',
  	render: (h) => h(App)
})

