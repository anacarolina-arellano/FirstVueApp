<template>
  <section class="inventory-container">
    <div class="sales-form">
        <h2>Incoming Shipment Registration</h2>
        <productInfo></productInfo>
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
</style>