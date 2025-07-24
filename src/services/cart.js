async function addItem(userCart, item) {
    userCart.push(item);
}

async function deleteItem(userCart, index){
    const indexToDelete = index - 1;
    if (index >= 0 && userCart.length) {
        userCart.splice(indexToDelete, 1);
    }
}

async function decrementItem(userCart, index) {
}

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
    decrementItem,
    calculateTotal,
    displayCart
}
