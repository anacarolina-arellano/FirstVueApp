<template>

    <section class="home-container">
        <div class="home">
            <h2>Welcome to the inventory manager</h2>
        </div>
    </section>

</template>
<script>

    import Controller from '@/mixins/controller'

    class InventoryManager extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
            }
            this.components ={
                
            }
        }
    }

    export default new InventoryManager('InventoryManager');

</script>