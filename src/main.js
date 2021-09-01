import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store'
import firebase from 'firebase'

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
    vuetify,
    render: h => h(App),
    router: router,
    store,
    created() {
        var firebaseConfig = {
            apiKey: 'AIzaSyBCV8trs2KTx3qRTqXgLD3akKRef8Tlyi8',
            authDomain: 'ads-sec.firebaseapp.com',
            projectId: 'ads-sec',
            storageBucket: 'ads-sec.appspot.com',
            messagingSenderId: '499134307229',
            appId: '1:499134307229:web:61ac06e7aecc919718ad74',
            measurementId: 'G-KGFMPTC4MB'
        };
        firebase.initializeApp(firebaseConfig);
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.$store.dispatch('autoLoginUser', user)
            }

        })
    }
}).$mount('#app')