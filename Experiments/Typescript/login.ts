/// <reference types="node" />
import * as readline from "readline";

// 1. User interface
interface User {
  username: string;
  password: string;
}

// 2. Hardcoded user list
const users: User[] = [
  { username: "admin", password: "admin123" },
  { username: "alice", password: "alicepass" },
  { username: "bob", password: "bob123" },
];

// 3. Login function
function login(username: string, password: string): boolean {
  return users.some(user => user.username === username && user.password === password);
}

// 4. CLI input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(" Enter username: ", (username) => {
  rl.question("Enter password: ", (password) => {
    if (login(username, password)) {
      console.log(`Login successful! Welcome, ${username}.`);
    } else {
      console.log(`Invalid username or password.`);
    }
    rl.close();
  });
});
