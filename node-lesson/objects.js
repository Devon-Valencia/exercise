const products = [{
    name: "Milk",
    price: 27,
    description: "Regular milk."
},
{
    name: "Nipple rings", 
    price: 30,
    description: "When someone is a little too kinky"
},
{ 
    name: "Downbad Manga",
    price: 19,
    description: "18+ Dont let your wife see this."
}];
const new_object = {
    get_product_sum: function(my_products_array){
        let sum = 0; 
        for (let i = 0; i < products.length; i++) {
            sum += products[i].price;
        };
        return sum;
    }
}
// function get_product_sum(my_products_array){
//     let sum = 0; 
//     for (let i = 0; i < products.length; i++) {
//         sum += products[i].price;
//     };
//     return sum;
// }
console.log(new_object.get_product_sum(products));