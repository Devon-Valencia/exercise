const products = require('./data/products.js');
const categories = require('./data/categories.js');

// Filtered through products to give items based on a ID.

// products.forEach((product) => {
//     const matchingCategory = categories.find(cat => cat.id === product.categoryId);
//     if (matchingCategory && matchingCategory.id === 1) {
//         console.log(product.name)
//     }    
// });

// Logged the name and price of all books under $40. 

products.forEach((product) => {
    const matchingCategory = categories.find(cat => cat.id === product.categoryId);
    if (matchingCategory && matchingCategory.id === 3 && product.price <= 40) {
        let filtered_products = `Product Name: ${product.name} \nProduct Price: ${product.price}`;
        console.log(filtered_products);
    }    
});
