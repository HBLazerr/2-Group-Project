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
//------------------------------------------------------
let decimal = prompt(`Enter a decimal number between 0 and 255.`);
let decimalToBinary = decimal;

let binary128 = 0;
let binary64 = 0;
let binary32 = 0;
let binary16 = 0;
let binary8 = 0;
let binary4 = 0;
let binary2 = 0;
let binary1 = 0;

if(decimal >= 128)
{
    decimal -= 128;
    binary128=1;    
}
if(decimal >= 64)
{
    decimal -= 64;
    binary64 = 1;
}
if(decimal >= 32)
{
    decimal -= 32;
    binary32 = 1;
}
if(decimal >= 16)
{
    decimal -= 16;
    binary16 = 1;
}
if(decimal >= 8)
{
    decimal -= 8;
    binary8 = 1;
}
if(decimal >= 4)
{
    decimal -= 4;
    binary4 = 1;
}
if(decimal >= 2)
{
    decimal -= 2;
    binary2 = 1
}
if(decimal >= 1)
{
    decimal -= 1;
    binary1 = 1;
}
console.log(`${binary128}${binary64}${binary32}${binary16} ${binary8}${binary4}${binary2}${binary1}`);
