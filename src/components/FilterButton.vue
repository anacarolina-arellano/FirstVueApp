<template>
  <div class="text-center">
    <v-btn
      rounded
      color="primary"
      dark
    >
      {{text}}
    </v-btn>
  </div>
</template>
<script>
    import Controller from '@/mixins/controller'

    class ButtonController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.props = {
              text: String
            }
            
        }
    }

    export default new ButtonController('filterButton');

</script>