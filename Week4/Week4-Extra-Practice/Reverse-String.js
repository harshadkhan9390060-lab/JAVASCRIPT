const reverseString = () => {
    let name = "Mahaboob";
    let reversed = "";

    for (let i = name.length - 1; i >= 0; i--) {
        reversed += name[i];
    }

    console.log("Reversed String:", reversed);
};

reverseString();