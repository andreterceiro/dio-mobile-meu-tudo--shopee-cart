import * as cartService from './services/cart.js';
import createItem from './services/item.js';

console.log("Bem-vindo ao carrinho da Shopee");

const item1 = await createItem("bala", 0.25, 4);
const item2 = await createItem("pirulito", 1, 1);

console.log(item1.subtotal());
