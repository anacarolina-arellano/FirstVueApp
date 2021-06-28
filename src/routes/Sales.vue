//Copyright (C) 2021 Ana Carolina Arellano Alvarez //template of the page
<template>
  <section class="sales-container">
    <div class="sales-form">
      <h2>Sales Form</h2>
      <validation-observer ref="observer" v-slot="{ invalid }">
        <form>
          <v-text-field
            v-model="employeeName"
            :counter="10"
            :error-messages="errors"
            label="Employee's Name"
            required
          ></v-text-field>
          <autocomplete></autocomplete>

          <v-text-field
            v-model="clientName"
            :counter="10"
            :error-messages="errors"
            label="Client's Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="address"
            :counter="15"
            :error-messages="errors"
            label="Address"
            required
          ></v-text-field>
          <v-text-field
            v-model="phoneNumber"
            :counter="7"
            :error-messages="errors"
            label="Phone Number"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :error-messages="errors"
            label="E-mail"
            required
          ></v-text-field>
          <h3>Products to be picked</h3>
          <v-row class="my-row">
            <v-text-field
              v-model="productId"
              class = "product"
              :error-messages="errors"
              label="Product Id"
              required
            ></v-text-field>
            <v-text-field
              v-model="quantity"
              class = "product"
              :error-messages="errors"
              label="Quantity"
              required
            ></v-text-field>
          </v-row>
          <v-row class="my-row">
            <v-text-field
              v-model="productId2"
              class = "product"
              :error-messages="errors"
              label="Product Id"
              required
            ></v-text-field>
            <v-text-field
              v-model="quantity2"
              class = "product"
              :error-messages="errors"
              label="Quantity"
              required
            ></v-text-field>
          </v-row>
          <v-row class="my-row">
            <v-text-field
              v-model="productId3"
              class = "product"
              :error-messages="errors"
              label="Product Id"
              required
            ></v-text-field>
            <v-text-field
              v-model="quantity3"
              class = "product"
              :error-messages="errors"
              label="Quantity"
              required
            ></v-text-field>
          </v-row>
          <v-btn class="mr-4 my-btn" type="submit" :disabled="invalid">
            Generate Fulfillment Order
          </v-btn>
          <v-btn @click="clear" class="my-btn"> clear </v-btn>
        </form>
      </validation-observer>
    </div>
  </section>
</template>
<script>
import Controller from "@/mixins/controller";
import autocomplete from "../components/Autocomplete";
import {
  ValidationObserver,
  ValidationProvider,
} from "vee-validate";

class Sales extends Controller {
  constructor(name, subComponentList = []) {
    super(name, subComponentList);
    this.vm = {
      employeeName: "",
      clientName: "",
      address: "",
      phoneNumber: "",
      email: "",
      productId: 0,
      quantity: 0,
      productId2: 0,
      quantity2: 0,
      productId3: 0,
      quantity3: 0,
    };
    this.components = {
      ValidationProvider,
      ValidationObserver,
      autocomplete,
    };
  }

  submit() {
    //TODO: Push information of the form to the store's "salesForm"
  }
  clear() {
    this.employeeName = ""
    this.clientName =  ""
    this.address = ""
    this.phoneNumber = ""
    this.email = ""
    this.productId = 0
    this.quantity = 0
    this.productId2 = 0
    this.quantity2 = 0
    this.productId3 = 0
    this.quantity3 = 0
  }
}
export default new Sales("Sales");
</script>
<style scoped>
h2 {
  text-align: center;
}
h3 {
  text-align: left;
  font-size: 22px;
  margin-top: 25px;
  font-weight: bold;
}
.sales-container {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
.my-btn {
  margin-top: 40px;
  margin-bottom: 50px;
}
.my-row{
  display: inline;
  flex-direction: row;
}
.product{
  display: inline-block;
  width:40%;
  margin-left: 10px;
  margin-right:10px;
}
</style>
