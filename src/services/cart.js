async function addItem(userCart, item) {
    userCart.push(item);
}

async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);
    if (index != -1) {
        userCart.splice(index, 1);
    } 
}

async function removeItem(userCart, index){}

async function calculateTotal(userCart){
    return userCart.reduce((total, item) => total + item.subtotal(), 0);
}

async function displayCart(userCart) {
    console.log("Shopee cart list\n");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$${item.price} | ${item.quantity}x | Subtotal ${item.subtotal()}`);
    });
}

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displayCart
}
