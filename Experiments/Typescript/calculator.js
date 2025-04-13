// 1. Define enum for operators
var Operator;
(function (Operator) {
    Operator["Add"] = "+";
    Operator["Subtract"] = "-";
    Operator["Multiply"] = "*";
    Operator["Divide"] = "/";
})(Operator || (Operator = {}));
// 2. Calculator function with proper typing
function calculate(a, b, operator) {
    switch (operator) {
        case Operator.Add:
            return a + b;
        case Operator.Subtract:
            return a - b;
        case Operator.Multiply:
            return a * b;
        case Operator.Divide:
            if (b === 0) {
                throw new Error("Cannot divide by zero");
            }
            return a / b;
        default:
            throw new Error("Invalid operator");
    }
}
// 3. Example usage
var num1 = 10;
var num2 = 5;
console.log("".concat(num1, " + ").concat(num2, " = ").concat(calculate(num1, num2, Operator.Add)));
console.log("".concat(num1, " - ").concat(num2, " = ").concat(calculate(num1, num2, Operator.Subtract)));
console.log("".concat(num1, " * ").concat(num2, " = ").concat(calculate(num1, num2, Operator.Multiply)));
console.log("".concat(num1, " / ").concat(num2, " = ").concat(calculate(num1, num2, Operator.Divide)));
