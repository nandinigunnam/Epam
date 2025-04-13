// 1. Interfaces
interface Book {
    id: number;
    title: string;
    author: string;
    isBorrowed: boolean;
  }
  
  interface Member {
    id: number;
    name: string;
    borrowedBooks: Book[];
  }
  
  // 2. Library Class
  class Library {
    private books: Book[] = [];
    private members: Member[] = [];
  
    // Add books to the library
    addBook(book: Book): void {
      this.books.push(book);
      console.log(`Book added: ${book.title}`);
    }
  
    // Add a member to the library
    addMember(member: Member): void {
      this.members.push(member);
      console.log(`Member added: ${member.name}`);
    }
  
    // Borrow a book
    borrowBook(memberId: number, bookId: number): void {
      const member = this.members.find(m => m.id === memberId);
      const book = this.books.find(b => b.id === bookId);
  
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
      console.log(`${member.name} borrowed "${book.title}".`);
    }
  
    // Return a book
    returnBook(memberId: number, bookId: number): void {
      const member = this.members.find(m => m.id === memberId);
      const book = this.books.find(b => b.id === bookId);
  
      if (!member || !book) {
        console.log("Member or book not found.");
        return;
      }
  
      if (!book.isBorrowed) {
        console.log("Book was not borrowed.");
        return;
      }
  
      book.isBorrowed = false;
      member.borrowedBooks = member.borrowedBooks.filter(b => b.id !== bookId);
      console.log(`${member.name} returned "${book.title}".`);
    }
  
    // Display all available books
    displayAvailableBooks(): void {
      const available = this.books.filter(b => !b.isBorrowed);
      console.log("Available Books:");
      available.forEach(b => console.log(`- ${b.title} by ${b.author}`));
    }
  
    // Display all borrowed books
    displayBorrowedBooks(): void {
      const borrowed = this.books.filter(b => b.isBorrowed);
      console.log("Borrowed Books:");
      borrowed.forEach(b => console.log(`- ${b.title} by ${b.author}`));
    }
  }
  
  // 3. Example Usage
  const library = new Library();
  
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
  
  library.displayAvailableBooks();   // Should show none
  library.displayBorrowedBooks();    // Should show both books
  
  library.returnBook(1, 1); // Alice returns 1984
  
  library.displayAvailableBooks();   // 1984 should show again
  library.displayBorrowedBooks();    // Only Mockingbird should show
  