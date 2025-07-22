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

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal
}
