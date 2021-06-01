//Copyright (C) 2021 Ana Carolina Arellano Alvarez

//template of the page
<template>
  <section class="sales-container">
    <div class="sales-form">
      <h2>Sales Form</h2>
      <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="submit">
        <validation-provider
          v-slot="{ errors }"
          name="Name"
          rules="required|max:10"
        >
          <v-text-field
            v-model="name"
            :counter="10"
            :error-messages="errors"
            label="Employee's Name"
            required
          ></v-text-field>
          <autocomplete></autocomplete>
        </validation-provider>
        <h3>Shipping info</h3>
        <validation-provider
          v-slot="{ errors }"
          name="ClientsName"
          rules="required|max:10"
        >
          <v-text-field
            v-model="name"
            :counter="10"
            :error-messages="errors"
            label="Client's Name"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="Address"
          rules="required|max:15"
        >
          <v-text-field
            v-model="name"
            :counter="15"
            :error-messages="errors"
            label="Address"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="phoneNumber"
          :rules="{
            required: true,
            digits: 7,
            regex: '^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$',
          }"
        >
          <v-text-field
            v-model="phoneNumber"
            :counter="7"
            :error-messages="errors"
            label="Phone Number"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="email"
          rules="required|email"
        >
          <v-text-field
            v-model="email"
            :error-messages="errors"
            label="E-mail"
            required
          ></v-text-field>
        </validation-provider>
        <h3>Products to be picked</h3>
        

        <v-btn class="mr-4" type="submit" :disabled="invalid"> Generate Fulfillment Order </v-btn>
        <v-btn @click="clear"> clear </v-btn>
      </form>
    </validation-observer>
    </div>
    
  </section>
</template>
<script>
    import Controller from "@/mixins/controller";
    import autocomplete from '../components/Autocomplete'
    import { required, digits, email, max, regex } from "vee-validate/dist/rules";
    import {
    extend,
    ValidationObserver,
    ValidationProvider,
    setInteractionMode,
    } from "vee-validate";

class Sales extends Controller {
  constructor(name, subComponentList = []) {
    super(name, subComponentList);
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
        autocomplete 
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
    this.name = ''
    this.phoneNumber = ''
    this.email = ''
    this.select = null
    this.checkbox = null
    this.$refs.observer.reset()
  }
} export default new Sales('Sales');

</script>
<style scoped>
    h2 {
    text-align: center;
    }
    h3{
        text-align: left;
        font-size: 22px;
        margin-top: 25px;
        font-weight: bold;
    }
    .sales-container{
        width: 50%;
        margin-left: auto;
        margin-right: auto;
    }
</style>