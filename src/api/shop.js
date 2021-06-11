
/**
 * Mocking client-server processing
 */
 const _products = [
    { 'id': 1, 'nameProduct': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2, 'category':'Clothing',
    'description':'Beautiful dress that is perfect for any event! Its blue color is trendy, there are only a few left!',
    'imageName':"dress.jpeg" },
    { 'id': 2, 'nameProduct': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10 },
    { 'id': 3, 'nameProduct': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 5 }
  ]
  
  export default {
    getProducts (cb) {
      setTimeout(() => cb(_products), 3000)
    },
  
    buyProducts (products, cb, errorCb) {
      setTimeout(() => {
        // simulate random checkout failure.
        (Math.random() > 0.5 || navigator.webdriver)
          ? cb()
          : errorCb()
      }, 100)
    }
  }
