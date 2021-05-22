<template>
    <div class="active-pink-4 mb-3 my-bar">
      <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
    </div>
</template>
<script>

    import Controller from '@/mixins/controller'

    class Customer extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
            }
            this.props = {
                name: String,
            }
        }
    }

    export default new Customer('Customer');

</script>

<style scoped>
.my-bar{
    margin-top: 200px;
    margin-left: 100px;
    margin-right: auto;
}
</style>