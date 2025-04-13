// 1. Generic Stack Class
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    // Push an item onto the stack
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    // Pop an item from the stack
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    // Peek at the top item of the stack
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    // Check if the stack is empty
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    // Get the size of the stack
    Stack.prototype.size = function () {
        return this.items.length;
    };
    // Print the stack
    Stack.prototype.print = function () {
        console.log(this.items);
    };
    return Stack;
}());
// 2. Example Usage with Different Types
// Number Stack
var numberStack = new Stack();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log("Number Stack:");
numberStack.print(); // [1, 2, 3]
console.log("Top of the stack:", numberStack.peek()); // 3
console.log("Is empty:", numberStack.isEmpty()); // false
console.log("Pop:", numberStack.pop()); // 3
numberStack.print(); // [1, 2]
// String Stack
var stringStack = new Stack();
stringStack.push("Apple");
stringStack.push("Banana");
stringStack.push("Cherry");
console.log("\nString Stack:");
stringStack.print(); // ["Apple", "Banana", "Cherry"]
console.log("Top of the stack:", stringStack.peek()); // "Cherry"
console.log("Is empty:", stringStack.isEmpty()); // false
console.log("Pop:", stringStack.pop()); // "Cherry"
stringStack.print(); // ["Apple", "Banana"]
var personStack = new Stack();
personStack.push({ name: "Alice", age: 30 });
personStack.push({ name: "Bob", age: 25 });
console.log("\nPerson Stack:");
personStack.print(); // [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }]
console.log("Top of the stack:", personStack.peek()); // { name: "Bob", age: 25 }
console.log("Is empty:", personStack.isEmpty()); // false
console.log("Pop:", personStack.pop()); // { name: "Bob", age: 25 }
personStack.print(); // [{ name: "Alice", age: 30 }]
