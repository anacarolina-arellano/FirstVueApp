<template>
  <div class="text-center ">
    <v-btn
      class="ma-2 myText myBorder"
      outlined
      color="indigo"
      min-width="210px"
    >
      <router-link :to="{ name }">{{ name }}</router-link>
    </v-btn>
  </div>
</template>

<script>
    import Controller from '@/mixins/controller'

    class RoleController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.props = {
              name: String
            }
            
        }
    }

    export default new RoleController('roles');

</script>

<style>
.myText{
  color:black;
}

</style>

