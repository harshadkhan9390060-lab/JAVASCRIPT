let names = ["Harshad", "Gopal", "Prasanth", "Uday", "Shivram"];
let searchName = "Uday";

const searchStudent = () => {
    let found = false;

    for (let i = 0; i < names.length; i++) {
        if (names[i] === searchName) {
            found = true;
            break;
        }
    }

    console.log(found ? "Name Found" : "Name Not Found");
};

searchStudent();