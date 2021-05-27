<template>

    <section class="shipping-container">
        <div class="shipping">
            <h2>Shipping Picker</h2>
            <h3>Pick List</h3>
            <h3>Shipping Info</h3>
            <v-btn
            class="my-button"
            elevation="2"
            outlined
            >Ship Order</v-btn>
        </div>
    </section>

</template>
<script>

    import Controller from '@/mixins/controller'

    class ShippingPicker extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
            }
            this.components ={
                
            }
        }
    }

    export default new ShippingPicker('ShippingPicker');

</script>
<style scoped>
h2{
    text-align: center;
}
h3{
    text-align: left;
    font-weight: bold;
}
.shipping-container{
    width:80%;
    margin-left: auto;
    margin-right:auto;
}
.my-button{
    margin-top:15px;
    margin-bottom: 15px;
    width: 20%;
    margin-left: auto;
    margin-right:auto;
    display: block;
}
</style>