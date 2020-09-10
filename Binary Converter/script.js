let dNum = Number(prompt("What is your decimal number?"));

let number1 = Math.floor(dNum / 16);
let remainder1 = dNum % 16;
// will return only the remainder

if(remainder1 == 10){
    remainder1 = "A";
}
if(remainder1 == 11){
    remainder1 = "B";
}
if(remainder1 == 12){
    remainder1 = "C";
}
if(remainder1 == 13){
    remainder1 = "D";
}
if(remainder1 == 14){
    remainder1 = "E";
}
if(remainder1 == 15){
    remainder1 = "F";
}
console.log("Your Decimal number converts to " + number1 + remainder1 + " in Hexadecimal");