const frequencyCounter = () => {
    let numbers = [1, 2, 2, 3, 3, 3, 4];
    let frequency = {};

    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        frequency[num] = (frequency[num] || 0) + 1;
    }

    console.log(frequency);
};

frequencyCounter();