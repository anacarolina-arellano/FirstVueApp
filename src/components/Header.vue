<!--
VFS VUE Single File Component

<pg-header></pg-header>

Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <header class="my-header">
            <div class="logo " @click="goHome( event )"></div>
            
    </header>

</template>
<script>
    import Controller from '@/mixins/controller'

    class HeaderController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                title: "Demo Vue App",
                subtitle: "VFS Programming for Games",
            }
        }

        goHome( event ) {
            // do some router magic here to actualy change the URL
            console.log("Going home now!");
            location.href = "./index.html";
        }
    }

    export default new HeaderController('myHeader');
/*
Below is the exact data structure Vue expects to take as input
when it creates a new component, and registers it.
This is what the Controller base class returns from the constructor

export default {
    name: 'pgHeader',
    data() {
        return {
            vm: {
                title:    "VUE Template Title",
                subtitle: "A Beggining",
            }
        }
    },
    props:   [],
    methods: {
        $ctrl: {
            goHome( event ) {
                console.log("Going home now!");
                location.href = "./index.html";
            }
        }
    },
    filters: {},
    watches: {}
}
*/
</script>
<style>
    .title h1, .title h3 {
        float:right;
        margin-right: 2vw;
        text-align:right;
        width: 100%;
    }
</style>