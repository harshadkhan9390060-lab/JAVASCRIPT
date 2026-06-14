let num = 5;

const findFactorial = () => {
    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }

    console.log(fact);
};

findFactorial();