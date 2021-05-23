<template>
    <div class="active-pink-4 mb-3 my-bar">
      <input class="form-control my-form" type="text" placeholder="Search" aria-label="Search"/>
    </div>
</template>
<script>

    import Controller from '@/mixins/controller'
    
    class Customer extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
            }
        }
    }

    export default new Customer('Customer');

</script>

<style scoped>
</style>