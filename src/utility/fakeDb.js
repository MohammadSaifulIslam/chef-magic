// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = getFromDb();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('favorite-dish', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const shoppingCart = getFromDb();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('favorite-dish', JSON.stringify(shoppingCart));
    }
}

const getFromDb = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('favorite-dish');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('favorite-dish');
}

export {
    addToDb,
    removeFromDb,
    getFromDb ,
    deleteShoppingCart
}