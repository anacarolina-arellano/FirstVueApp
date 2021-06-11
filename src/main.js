import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
/*
VUE App's MAIN Component.
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
'use strict';

import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
//registering(globally) our router to our root #app
import store from '@/store'

import router from '@/router'

//This is were we register every components that is instantiated in this Main Root Component.
import App from '@/App.vue'

class MainApp {

    constructor () {
        new Vue({
            router,
            store,
            vuetify,
            components: { App },
            render: h => h( App ),
        }).$mount('#app');
    }

}

// Main entry point of the application
document.addEventListener('DOMContentLoaded', event => {

    const app = new MainApp();
});