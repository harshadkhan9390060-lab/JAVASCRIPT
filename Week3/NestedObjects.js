let student = {
    name: "Harshad",
    age: 21,
    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
};

const showStudent = () => {
    console.log(student.name);
    console.log(student.address.city);
    console.log(student.address.state);
};

showStudent();