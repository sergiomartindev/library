## Exercise: Applying GRASP and SOLID to a Web Application

You are tasked with building a web application for a library. The library has a large collection of books that are categorized into various genres. Users of the application can browse the collection of books, search for books by title, author or genre, and borrow books for a limited time period.

Apply the following GRASP patterns and SOLID principles to the design of this web application:

### GRASP Patterns:
1. Information Expert
The book entity is the information expert as it contains the information about the book's title, author, genre, and availability. The Book entity should have a method that can be used to check if the book is available for borrowing or not.

2. Creator
The BookFactory is the creator pattern as it is responsible for creating instances of the Book entity.

3. Low Coupling
To achieve low coupling, we can use interfaces to define the contract between components. For example, we can create an interface called IBookRepository to define the methods that a book repository should implement. Then we can have different implementations of this interface for different storage technologies such as a database or a file system.

4. High Cohesion
The BookService should have high cohesion. It should contain methods that deal with books, such as searchBooks, borrowBook, returnBook, etc. It should not contain methods that deal with other concerns like authentication, caching, or logging.

5. Controller
The BookController can be the controller pattern as it receives requests from the users and interacts with the book service to return the appropriate response.

### SOLID Principles:
1. Single Responsibility Principle
Each class should have only one reason to change. The Book entity should only contain the book's information, and the BookService should only handle book-related operations.

2. Open-Closed Principle
The classes should be open for extension but closed for modification. For example, the BookRepository class should be extensible to support different storage technologies without modifying its existing code.

3. Liskov Substitution Principle
Derived classes should be substitutable for their base classes. For example, if we have a BookRepository class that implements the IBookRepository interface, we should be able to substitute it with a different implementation without breaking the code.

4. Interface Segregation Principle
The interfaces should be small and focused on a specific purpose. For example, the IBookRepository interface should only contain the methods that are needed to access the book storage.

5. Dependency Inversion Principle
The high-level modules should not depend on the low-level modules, but both should depend on abstractions. For example, the BookService should depend on the IBookRepository interface, not on a specific implementation of the BookRepository class.

Provide a solution to the exercise that demonstrates how you applied the GRASP patterns and SOLID principles to the design of the web application for the library. Be sure to explain your thought process and reasoning behind each decision you made.