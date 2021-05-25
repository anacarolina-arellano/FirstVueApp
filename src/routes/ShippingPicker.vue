<template>

    <section class="home-container">
        <div class="home">
            <h2>Welcome to shipping picker</h2>
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