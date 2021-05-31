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

        <v-row class="my-filter">
            <filterOption></filterOption></v-row>
        <v-row>
            <myCard nameProduct="Blue Dress"
                    price="50"
                    category="Clothing"
                    description="Beautiful dress that is perfect for 
                    any event! Its blue color is trendy, there are
                    only a few left! "
                    imageName="dress.jpeg">
            </myCard>
            <myCard nameProduct="Nike Shoes"
                    price="70"
                    category="Shoes"
                    description="This pair of shoes is perfect for
                    any occasion. They are super comfortable, you'll
                    love them!"
                    imageName="shoes.jpg">
            </myCard>
            <myCard nameProduct="White top"
                    price="36"
                    category="Tops"
                    description="White top that is perfect for the summer,
                    it is made of good materials and fits sizes S and M. "
                    imageName="top.jpeg">
            </myCard>
           
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
            <myCard nameProduct="Nike Shoes"
                    price="70"
                    category="Shoes"
                    description="This pair of shoes is perfect for
                    any occasion. They are super comfortable, you'll
                    love them!"
                    imageName="shoes.jpg">
            </myCard>
            <myCard nameProduct="White top"
                    price="36"
                    category="Tops"
                    description="White top that is perfect for the summer,
                    it is made of good materials and fits sizes S and M. "
                    imageName="top.jpeg">
            </myCard>
           
        </v-row>
    </div>
    
</template>
<script>

    import Controller from '@/mixins/controller'
    import searchbar from '../components/Searchbar'
    import cartButton from '../components/MyCartButton'
    import myCard from '../components/Card'
    import filterOption from '../components/Filter'

    class Customer extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
            }
            this.components = {
                searchbar,
                cartButton,
                myCard,
                filterOption,
            }
        }
    }

    export default new Customer('Customer');

</script>

<style scoped>
.my-filter{
    max-height: fit-content;
    margin-bottom: 15px;
    width: 80%;
    margin-left: 5px;
}
</style>