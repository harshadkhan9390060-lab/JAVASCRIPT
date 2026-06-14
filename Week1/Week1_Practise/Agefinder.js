let name = "Harshad";
let birthYear = 2004;
let currentYear = 2026;

const showDetails = () => {
    let age = currentYear - birthYear;

    console.log("Name:", name);
    console.log("Birth Year:", birthYear);
    console.log("Age:", age);
};

showDetails();