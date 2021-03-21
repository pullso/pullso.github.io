import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import firebaseConfig from './plugins/config.firebase';

Vue.config.productionTip = false;

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch('fetchUser', user);
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
