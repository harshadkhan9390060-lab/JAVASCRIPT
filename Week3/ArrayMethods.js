let names = ["Harshad", "Gopal", "Prasanth"];

const arrayMethods = () => {
    names.push("Uday");
    console.log(names);

    names.pop();
    console.log(names);

    names.shift();
    console.log(names);

    names.unshift("Shivram");
    console.log(names);

    console.log(names.length);
};

arrayMethods();