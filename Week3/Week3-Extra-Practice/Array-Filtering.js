let numbers = [10, 15, 20, 25, 30, 35];

const findEvenNumbers = () => {
    let evenNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            evenNumbers.push(numbers[i]);
        }
    }

    console.log(evenNumbers);
};

findEvenNumbers();