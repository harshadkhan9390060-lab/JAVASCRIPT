let name = "harshad";

const checkPalindrome = () => {
    let reversed = name.split("").reverse().join("");

    if (name === reversed) {
        console.log("Palindrome");
    } else {
        console.log("Not Palindrome");
    }
};

checkPalindrome();