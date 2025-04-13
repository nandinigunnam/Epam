// 1. Define enum for operators
enum Operator {
    Add = "+",
    Subtract = "-",
    Multiply = "*",
    Divide = "/",
  }
  
  // 2. Calculator function with proper typing
  function calculate(a: number, b: number, operator: Operator): number {
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
  const num1 = 10;
  const num2 = 5;
  
  console.log(`${num1} + ${num2} = ${calculate(num1, num2, Operator.Add)}`);
  console.log(`${num1} - ${num2} = ${calculate(num1, num2, Operator.Subtract)}`);
  console.log(`${num1} * ${num2} = ${calculate(num1, num2, Operator.Multiply)}`);
  console.log(`${num1} / ${num2} = ${calculate(num1, num2, Operator.Divide)}`);
  