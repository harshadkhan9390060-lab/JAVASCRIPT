const first = () => {
    console.log("First function");
    second();
};

const second = () => {
    console.log("Second function");
    third();
};

const third = () => {
    console.log("Third function");
};

first();