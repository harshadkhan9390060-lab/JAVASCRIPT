let html = 85;
let css = 90;
let javascript = 80;

const calculateMarks = () => {
    let total = html + css + javascript;
    let average = total / 3;

    console.log("Total Marks:", total);
    console.log("Average Marks:", average);
};

calculateMarks();