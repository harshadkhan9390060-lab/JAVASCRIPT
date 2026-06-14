const secondLargest = () => {
    let numbers = [10, 50, 30, 80, 40];

    numbers.sort((a, b) => a - b);

    console.log("Second Largest:", numbers[numbers.length - 2]);
};

secondLargest();