<template>
    <v-row>
        <v-col cols="10">
            <searchbar></searchbar> 
        </v-col>
        <v-col cols="2">
            <cartButton></cartButton>
        </v-col>
    </v-row>
</template>
<script>

    import Controller from '@/mixins/controller'
    import searchbar from '../components/Searchbar'
    import cartButton from '../components/MyCartButton'

    class Customer extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
            }
            this.components = {
                searchbar,
                cartButton
            }
        }
    }

    export default new Customer('Customer');

</script>

<style scoped>
</style>