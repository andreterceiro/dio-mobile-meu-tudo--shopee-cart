import * as cartService from './services/cart.js';
import createItem from './services/item.js';

console.log("Bem-vindo ao carrinho da Shopee");

const myCart = [];
const myWishList = [];

const item1 = await createItem("bala", 0.25, 4);
const item2 = await createItem("pirulito", 1, 1);
const item3 = await createItem("bola", 20, 2);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myWishList, item3);

console.log("Subtotal do carrinho: " + await cartService.calculateTotal(myCart));
console.log("\n");
console.log("Subtotal da wishlist: " + await cartService.calculateTotal(myWishList));

