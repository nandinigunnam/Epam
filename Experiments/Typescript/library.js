// 2. Library Class
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.members = [];
    }
    // Add books to the library
    Library.prototype.addBook = function (book) {
        this.books.push(book);
        console.log("Book added: ".concat(book.title));
    };
    // Add a member to the library
    Library.prototype.addMember = function (member) {
        this.members.push(member);
        console.log("Member added: ".concat(member.name));
    };
    // Borrow a book
    Library.prototype.borrowBook = function (memberId, bookId) {
        var member = this.members.find(function (m) { return m.id === memberId; });
        var book = this.books.find(function (b) { return b.id === bookId; });
        if (!member) {
            console.log("Member not found.");
            return;
        }
        if (!book) {
            console.log("Book not found.");
            return;
        }
        if (book.isBorrowed) {
            console.log("Book is already borrowed.");
            return;
        }
        book.isBorrowed = true;
        member.borrowedBooks.push(book);
        console.log("".concat(member.name, " borrowed \"").concat(book.title, "\"."));
    };
    // Return a book
    Library.prototype.returnBook = function (memberId, bookId) {
        var member = this.members.find(function (m) { return m.id === memberId; });
        var book = this.books.find(function (b) { return b.id === bookId; });
        if (!member || !book) {
            console.log("Member or book not found.");
            return;
        }
        if (!book.isBorrowed) {
            console.log("Book was not borrowed.");
            return;
        }
        book.isBorrowed = false;
        member.borrowedBooks = member.borrowedBooks.filter(function (b) { return b.id !== bookId; });
        console.log("".concat(member.name, " returned \"").concat(book.title, "\"."));
    };
    // Display all available books
    Library.prototype.displayAvailableBooks = function () {
        var available = this.books.filter(function (b) { return !b.isBorrowed; });
        console.log("Available Books:");
        available.forEach(function (b) { return console.log("- ".concat(b.title, " by ").concat(b.author)); });
    };
    // Display all borrowed books
    Library.prototype.displayBorrowedBooks = function () {
        var borrowed = this.books.filter(function (b) { return b.isBorrowed; });
        console.log("Borrowed Books:");
        borrowed.forEach(function (b) { return console.log("- ".concat(b.title, " by ").concat(b.author)); });
    };
    return Library;
}());
// 3. Example Usage
var library = new Library();
// Add Books
library.addBook({ id: 1, title: "1984", author: "George Orwell", isBorrowed: false });
library.addBook({ id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", isBorrowed: false });
// Add Members
library.addMember({ id: 1, name: "Alice", borrowedBooks: [] });
library.addMember({ id: 2, name: "Bob", borrowedBooks: [] });
// Borrow and Return
library.borrowBook(1, 1); // Alice borrows 1984
library.borrowBook(2, 1); // Book already borrowed
library.borrowBook(2, 2); // Bob borrows Mockingbird
library.displayAvailableBooks(); // Should show none
library.displayBorrowedBooks(); // Should show both books
library.returnBook(1, 1); // Alice returns 1984
library.displayAvailableBooks(); // 1984 should show again
library.displayBorrowedBooks(); // Only Mockingbird should show
