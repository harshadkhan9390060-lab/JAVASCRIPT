const fibonacciSeries = () => {
    let n = 7;
    let first = 2;
    let second = 3;

    console.log(first);
    console.log(second);

    for (let i = 2; i < n; i++) {
        let next = first + second;
        console.log(next);

        first = second;
        second = next;
    }
};

fibonacciSeries();