"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
// 2. Hardcoded user list
var users = [
    { username: "admin", password: "admin123" },
    { username: "alice", password: "alicepass" },
    { username: "bob", password: "bob123" },
];
// 3. Login function
function login(username, password) {
    return users.some(function (user) { return user.username === username && user.password === password; });
}
// 4. CLI input
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question(" Enter username: ", function (username) {
    rl.question("Enter password: ", function (password) {
        if (login(username, password)) {
            console.log("Login successful! Welcome, ".concat(username, "."));
        }
        else {
            console.log("Invalid username or password.");
        }
        rl.close();
    });
});
