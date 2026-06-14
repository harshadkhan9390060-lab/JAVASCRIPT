let numbers = [50, 20, 80, 10, 40];

const sortNumbers = () => {
    numbers.sort((a, b) => a - b);
    console.log(numbers);
};

sortNumbers();