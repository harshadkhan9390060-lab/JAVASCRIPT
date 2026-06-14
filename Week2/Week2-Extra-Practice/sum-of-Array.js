let numbers = [10, 20, 30, 40, 50];

const findSum = () => {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    console.log(sum);
};

findSum();