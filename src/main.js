import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  created()
  {
    //setting configurations
    const config = {
        apiKey: "AIzaSyB9BZdJnwi37BLO6mplPgpViQl2h7Dmn_M",
        authDomain: "vue-vuetify-auth.firebaseapp.com",
        projectId: "vue-vuetify-auth",
        storageBucket: "vue-vuetify-auth.appspot.com",
        messagingSenderId: "302104980408",
        appId: "1:302104980408:web:e1a7aabb3400f64800fd4d"
    }
    firebase.initializeApp(config)//initialisation
    //keep signin user signin
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.$store.dispatch("autoSign", user)
      }
    })
  }
}).$mount('#app')
