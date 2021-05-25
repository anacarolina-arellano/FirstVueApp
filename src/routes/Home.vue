<!--
VFS VUE Single File Component

<pg-home user="User"></pg-home>

Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="home-container">
        <div class="home">
            <h2>Welcome to the {{ name }}</h2>
            <h2>Please select a role: </h2>
            <roles name="Customer" class="roles"> </roles>
            <roles name="Inventory Manager" class="roles"> </roles>
            <roles name="Sales" class="roles"> </roles>
            <roles name="Shipping Picker" class="roles"> </roles>
        </div>
    </section>

</template>
<script>

    import Controller from '@/mixins/controller'
    import roles from '../components/ChooseRole'

    class HomeController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
            }
            this.props = {
                name: String,
            }
            this.components ={
                roles
            }
        }
    }

    export default new HomeController('pgHome');

</script>
<style scoped>
    /* Local styles for this template */
    .home-container {
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
        display: inline-block;
        width: 100%;
    }

    .home {
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        color: black;
        height: 78vh;
        width: 80vw;
    }

    .roles{
        margin-top: 15px;
        margin-bottom: 15px;
    }
</style>
