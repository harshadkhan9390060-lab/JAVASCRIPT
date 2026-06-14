let student = {
    name: "Harshad",
    age: 21,
    marks: 85,
    course: "Full Stack"
};

const showStudent = () => {
    for (let key in student) {
        console.log(key + " : " + student[key]);
    }
};

showStudent();