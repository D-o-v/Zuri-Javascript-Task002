const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const operator = prompt("Enter operator (+, -, /, *)");
let result = 0;
if(isNaN(num1) || isNaN(num2)){
    alert("Wrong input! Refresh the page again and provide the correct data!!!");
}else{
    if(operator == "+"){
        result = num1 + num2;
    }else if(operator == "-"){
        result = num1 - num2;
    }else if(operator == "/"){
        result = num1 / num2;
    }else if(operator == "*"){
        result = num1 * num2;
    }
document.write(num1 + operator + num2 + " = " + result);
}