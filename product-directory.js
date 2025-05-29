// calculateDiscount Function

function calculateDiscount(price, discountPercent) {
    if (typeof price !== 'number' || typeof discountPercent !== 'number' || price < 0 || discountPercent < 0) {
      return null;
    }
    let discountedPrice = (price - (price * (discountPercent)));
    return discountedPrice;
  }

  console.log(calculateDiscount(100, .50));

// filterProducts Function
let products = [
    {item: "computer", inStock: true},
    {item: "laptop", inStock: false},
    {item: "mouse", inStock: true},
    {item: "keyboard", inStock: true},
    {item: "headphones", inStock: false},
]

function filterProducts(products) {
    if (!Array.isArray(products)) {
      return "Invalid input. Expected an array of products.";
    }
  
    return products.filter(product => product.inStock === true);
  }

  
  // sortInventory Function
  function sortInventory(products) {
    return products.sort(function(a, b) {
      if (a.item < b.item) {
        return -1;
      }
      if (a.item > b.item) {
        return 1;
      }
      return 0;
    });
  }

  module.exports = { calculateDiscount, filterProducts, sortInventory };