<template>
  <section class="inventory-container">
    <div class="sales-form">
        <h2>Incoming Shipment Registration</h2>
        <productInfo></productInfo>
        <productInfo></productInfo>
         <v-row class="my-row"> 
            <v-btn @click="addBtn"> Add more items </v-btn>
        </v-row>
        <v-row>
            <v-btn  class="mr-4" type="submit" :disabled="invalid"> Register Incoming Shipment </v-btn>
        </v-row>
    </div>
    
  </section>
</template>
<script>
    import Controller from "@/mixins/controller";
    import productInfo from '../components/ProductInfo'

class InventoryManager extends Controller {
  constructor(name, subComponentList = []) {
    super(name, subComponentList);
    this.vm = {};
    this.components = {
        productInfo
    };
    
  }
}
export default new InventoryManager('InventoryManager');


</script>
<style scoped>
    h2 {
    text-align: center;
    }
    .inventory-container{
        width: 50%;
        margin-left: auto;
        margin-right: auto;
    }
    .my-row{
        margin-top: 15px;
        margin-bottom: 15px;
    }
</style>