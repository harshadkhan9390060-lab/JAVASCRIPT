const shoppingCart = () => {
    let cart = ["Shirt", "Shoes", "Watch"];

    console.log("Shopping Cart:");
    console.log(cart);

    cart.push("Bag");
    console.log("After Adding Bag:");
    console.log(cart);

    cart.pop();
    console.log("After Removing Last Item:");
    console.log(cart);

    console.log("Total Items:", cart.length);
};

shoppingCart();