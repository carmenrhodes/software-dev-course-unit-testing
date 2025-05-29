const {calculateDiscount} = require('../product-directory')

// Test for calculateDiscount Function

describe ("calculateDiscount function", () => {
    test("should display the new cost with discount applied", () => {
        expect(calculateDiscount(100, 0.5)).toBe(50);
    })
})

// Test for filterProducts Function

const { filterProducts } = require('../product-directory');

describe("filterProducts function", () => {
  const products = [
    { item: "computer", inStock: true },
    { item: "laptop", inStock: false },
    { item: "mouse", inStock: true },
    { item: "keyboard", inStock: true },
  ];

  test("should filter the products that are in stock", () => {
    const result = filterProducts(products);
    expect(result).toEqual([
      { item: "computer", inStock: true },
      { item: "mouse", inStock: true },
      { item: "keyboard", inStock: true },
    ]);
  });
});

// Test for sortInventory function

const { sortInventory } = require('../product-directory');

describe("sortInventory function", () => {
    const products2 = [
        {item: "computer", inStock: true},
        {item: "laptop", inStock: false},
        {item: "mouse", inStock: true},
        {item: "keyboard", inStock: true},
        {item: "headphones", inStock: false},
    ]
    test("should sort items in alphabetical order", () => {
        const sortedItems = sortInventory(products2)
        expect(sortedItems).toEqual([
            {item: "computer", inStock: true},
            {item: "headphones", inStock: false},
            {item: "keyboard", inStock: true},
            {item: "laptop", inStock: false},
            {item: "mouse", inStock: true},
        ])
    })
})