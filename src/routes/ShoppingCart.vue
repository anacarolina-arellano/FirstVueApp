<template>
    <div>
        <h1>Shopping Cart</h1>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{product.nameProduct}} - {{product.price | currency}} - {{product.quantity}}
            </li>
        </ul>
        <p>Total: {{total | currency}}</p>
        <button @click="checkout">Checkout</button>
        <p v-if="checkOutStatus">{{checkoutStatus}}</p>
    </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
    export default {
        computed: {
            ...mapGetters({
                products: 'cartProducts',
                total: 'cartTotal'
            }),

            ...mapState({
                checkOutStatus: 'checkoutStatus'
            })
        },

        methods:{
            ...mapActions(['checkout'])
        }
    }
</script>