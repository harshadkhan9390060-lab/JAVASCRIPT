// Print Numbers 1 to 5 Using Different Loops (Arrow Functions)

// 1. Using For Loop
const printUsingFor = () => {
    console.log("Using For Loop:");
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
};

// 2. Using While Loop
const printUsingWhile = () => {
    console.log("\nUsing While Loop:");
    let i = 1;

    while (i <= 5) {
        console.log(i);
        i++;
    }
};

// 3. Using Map Method
const printUsingMap = () => {
    console.log("\nUsing Map:");
    [1, 2, 3, 4, 5].map(num => console.log(num));
};

// Function Calls
printUsingFor();
printUsingWhile();
printUsingMap();