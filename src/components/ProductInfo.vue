//Copyright (C) 2021 Ana Carolina Arellano Alvarez

//template of form to add the information of a product
<template>
  <div class="text-center">
    <h3>Product {{num}}</h3>
      <validation-observer ref="observer" v-slot="{  }">
      <form @submit.prevent="submit">
        <validation-provider
          v-slot="{ errors }"
          name="itemsName"
          rules="required|max:10"
        >
          <v-text-field
            v-model="itemsName"
            :counter="10"
            :error-messages="errors"
            label="Item's Name"
            required
          ></v-text-field>
        </validation-provider>
        
        <validation-provider
          v-slot="{ errors }"
          name="quantity"
          :rules="{
            required: true,
            digits: 7,
            regex: '^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$',
          }"
        >
          <v-text-field
            v-model="quantity"
            :counter="10"
            :error-messages="errors"
            label="Quantity"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="wholesalePrice"
          :rules="{
            required: true,
            digits: 7,
            regex: '^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$',
          }"
        >
          <v-text-field
            v-model="wholesalePrice"
            :counter="15"
            :error-messages="errors"
            label="Wholesale Price"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="retailPrice"
          :rules="{
            required: true,
            digits: 7,
            regex: '^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$',
          }"
        >
          <v-text-field
            v-model="retailPrice"
            :counter="7"
            :error-messages="errors"
            label="Retail Price"
            required
          ></v-text-field>
        </validation-provider>
      </form>
    </validation-observer>
  </div>
</template>
<script>
    import Controller from '@/mixins/controller'
    import { required, digits, email, max, regex } from "vee-validate/dist/rules";
    import {
    extend,
    ValidationObserver,
    ValidationProvider,
    setInteractionMode,
    } from "vee-validate";

    class ProductInfo extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
              name: '',
              phoneNumber: '',
              email: '',
              select: null,
              items: [
                  'Item 1',
                  'Item 2',
                  'Item 3',
                  'Item 4',
              ],
              checkbox: null,
            };
            this.components = {
              ValidationProvider,
              ValidationObserver,
            };
            setInteractionMode("eager");
            extend("digits", {
              ...digits,
              message: "{_field_} needs to be {length} digits. ({_value_})",
            });

            extend("required", {
              ...required,
              message: "{_field_} can not be empty",
            });

            extend("max", {
              ...max,
              message: "{_field_} may not be greater than {length} characters",
            });

            extend("regex", {
              ...regex,
              message: "{_field_} {_value_} does not match {regex}",
            })
            
            extend('email', {
                ...email,
                message: 'Email must be valid',
            })
            
        }
        submit () {
            this.$refs.observer.validate()
        }
        clear () {
            this.itemsName = ''
            this.quantity = 0
            this.wholesalePrice= 0
            this.retailPrice = 0
            this.$refs.observer.reset()
        }
    } export default new ProductInfo('ProductInfo');
</script>
<style scoped>

    h3{
        text-align: left;
        font-size: 22px;
        margin-top: 25px;
        font-weight: bold;
    }

</style>