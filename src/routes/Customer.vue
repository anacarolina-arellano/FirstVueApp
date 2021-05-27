<template>
    <div>
        <v-row>
            <v-col cols="10">
                <searchbar></searchbar> 
            </v-col>
            <v-col cols="2">
                <cartButton></cartButton>
            </v-col>
            
        </v-row>
        <v-row>
            <myCard nameProduct="Blue Dress"
                    price="50"
                    category="Clothing"
                    description="Beautiful dress that is perfect for 
                    any event! Its blue color is trendy, there are
                    only a few left! "
                    imageName="dress.jpeg">
            </myCard>

           
        </v-row>
        
    </div>
    
</template>
<script>

    import Controller from '@/mixins/controller'
    import searchbar from '../components/Searchbar'
    import cartButton from '../components/MyCartButton'
    import myCard from '../components/Card'

    class Customer extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
            }
            this.components = {
                searchbar,
                cartButton,
                myCard 
            }
        }
    }

    export default new Customer('Customer');

</script>

<style scoped>
</style>