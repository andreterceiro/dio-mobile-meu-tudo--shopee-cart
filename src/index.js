import * as cartService from './services/cart.js';
import createItem from './services/item.js';

console.log("Bem-vindo ao carrinho da Shopee");

const myCart = [];

const item1 = await createItem("bala", 0.25, 4);
const item2 = await createItem("pirulito", 1, 1);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

console.log("Subtotal: " + await cartService.calculateTotal(myCart));

