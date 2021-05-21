<template>
  <div class="text-center">
    <v-btn
      class="ma-2 myText"
      outlined
      color="indigo"
    >
      <li id="li-names" v-for="(item, index) in names" :key="index">
        <router-link :to="{ name:item.name }">{{ item.name }}</router-link>
      </li>
    </v-btn>
  </div>
</template>

<script>
    import Controller from '@/mixins/controller'

    class RoleController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                names:[
                    { name: "Consumer" },
                    { name: "Inventory Manager" },
                    { name: "Sales" },
                    { name: "Shipping Picker" },
                ]
            };
        }
    }

    export default new RoleController('roles');

</script>

<style>
.myText{
  color:black;
}
</style>