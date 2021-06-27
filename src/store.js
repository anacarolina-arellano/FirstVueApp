import Vuex, { Store } from 'vuex'
import Vue from 'vue'
import shop from './api/shop'
import {_products} from './api/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    products:[],
    cart: [],
    checkoutStatus: null
  },
  getters:{
    availableProducts(state, getters){
      return state.products.filter(product => product.inventory > 0)
    },
    cartProducts(state) {
      return state.cart.map(cartItem => {
        const product = state.products.find(product => product.id == cartItem.id)
        
        return {
          name: product.nameProduct,
          price: product.price,
          quantity: cartItem.quantity,
          id: product.id
        }
      })
    },
    cartTotal(state, getters) {
      return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
    },
    productIsInStock() {
      return (product) => {
        return product.inventory > 0
      }
    }
  },
  actions:{
    fetchProducts({commit}){
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })
    },
    addProduct({state, getters, commit}, product){
      commit('addProduct', product)
    },
    addProductToCart({state, getters, commit}, product){
      commit('pushProductToCart', product)
      if(getters.productIsInStock(product)){
        console.log("en stock")
        const cartItem = state.cart.find(item => item === product)
        if(!cartItem){
          console.log("en cart item")
          commit('pushProductToCart', product)
        } else {
          console.log("en else")
          commit('incrementItemQuantity', cartItem)
        }
        commit('decrementProductInventory', cartItem)
      }
    },
    deleteProductFromCart({state, getters, commit}, product){
      commit('delProductFromCart', product)
    },
    checkout({state, commit}){
      shop.buyProducts(
        state.cart,
        () => {
          commit('emptyCart')
          commit('setCheckoutStatus', 'success')
        },
        () => {
          commit('setCheckoutStatus', 'fail')
        }
      )
    }
  },
  mutations:{
    //add new element to products
    addProduct(state, product){
      _products.push(product)
      console.log(_products)
    },
    setProducts(state, products){
      state.products = products
    },
    pushProductToCart(state, productId){
      state.cart.push({
        id: productId,
        quantity: 1
      })
    },
    delProductFromCart(state, productId){
      const product =  state.cart.find(product => product.id == productId)
      return state.cart[product]--
    },
    incrementItemQuantity(state, cartItem){
      cartItem.quantity++
    },

    decrementProductInventory(state, product){
      product.inventory--
    },

    setCheckoutStatus(state, status) {
      state.checkStatus = status
    },

    emptyCart(state) {
      state.cart = []
    }
  }
})