<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      class="my-img"
      height="250"
      src="require('@/assets/' + imageName + '')"
    ></v-img>

    <v-card-title>{{nameProduct}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          ${{price}}
        </div>
      </v-row>

      <div class="my-4 subtitle-1">
          {{category}}
      </div>

      <div>{{description}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions class="my-actions">
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        {{nameProduct}} <br/> ${{price}}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
    import Controller from '@/mixins/controller'

    class Card extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.props = {
              nameProduct: String,
              price: Number,
              category: String,
              description: String,
              imageName: String
            }
            
        }
    }

    export default new Card('myCard');
</script>
<style scoped>
.my-actions{
    justify-content: center;
}
.my-img{
    justify-content: center;
    background-position: center;
}
</style>