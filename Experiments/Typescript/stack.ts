// 1. Generic Stack Class
class Stack<T> {
    private items: T[] = [];
  
    // Push an item onto the stack
    push(item: T): void {
      this.items.push(item);
    }
  
    // Pop an item from the stack
    pop(): T | undefined {
      return this.items.pop();
    }
  
    // Peek at the top item of the stack
    peek(): T | undefined {
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    // Get the size of the stack
    size(): number {
      return this.items.length;
    }
  
    // Print the stack
    print(): void {
      console.log(this.items);
    }
  }
  
  // 2. Example Usage with Different Types
  
  // Number Stack
  const numberStack = new Stack<number>();
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
  const stringStack = new Stack<string>();
  stringStack.push("Apple");
  stringStack.push("Banana");
  stringStack.push("Cherry");
  console.log("\nString Stack:");
  stringStack.print(); // ["Apple", "Banana", "Cherry"]
  console.log("Top of the stack:", stringStack.peek()); // "Cherry"
  console.log("Is empty:", stringStack.isEmpty()); // false
  console.log("Pop:", stringStack.pop()); // "Cherry"
  stringStack.print(); // ["Apple", "Banana"]
  
  // Custom Object Stack
  interface Person {
    name: string;
    age: number;
  }
  
  const personStack = new Stack<Person>();
  personStack.push({ name: "Alice", age: 30 });
  personStack.push({ name: "Bob", age: 25 });
  console.log("\nPerson Stack:");
  personStack.print(); // [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }]
  console.log("Top of the stack:", personStack.peek()); // { name: "Bob", age: 25 }
  console.log("Is empty:", personStack.isEmpty()); // false
  console.log("Pop:", personStack.pop()); // { name: "Bob", age: 25 }
  personStack.print(); // [{ name: "Alice", age: 30 }]
  