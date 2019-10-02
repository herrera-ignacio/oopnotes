# Object-oriented notebook

I've made this notebook as a reference guide for object-oriented programming concepts and design patterns.
My goal is to let anyone find the core concepts needed to properly design reusable and efficient code following the object-oriented paradigm.

While trying to learn myself, I've struggled researching and wasting a lot of time on multiple sources, courses, lectures, or even talking to collegues, 
trying to learn some of the topics I cover here, and I would have definitly loved to find all in one single place.

Even though I will try to explain everything in detail assuming you are not familiar with any of the concepts you'll find here, I strongly
encourage you to take this as a reference guide to go and do your own research and experimentation on any specific topic that you may find interesting.

If you are indeed, a newcomer with zero or begginner level experience of object-oriented programming concepts like _inheritance_ and _polymorphism_, 
please try following this notebook sequentially, step by step in the order I propose, as topics will be built on previous ones.
In any other case, you might want to skip some of the topics or come back to a particular one to refresh something, for that you may use the following
Index of Contents.
# Design Principles: SOLID
5 design principles introduced by Robert C. Martin frequently referenced.

> 'Agile Software Development: Priciples, Patterns, and Practices' by Robert C. Martin

* Single Responsability
* Open-Closed
* Liskov Substitution
* Interface Segregation
* Dependency Inversion

 #### Single Responsability

> Classes should have a single responsibility and thus only a single reason to change.

Further, the elements of that responsibility should be encapsulated by the responsible class rather than spread out in unrelated classes. The developer and chief evangelist of the SRP, Robert C. Martin, describes a responsibility as a “reason to change.” So, another way of putting the SRP is to say, as Martin does, that “a class should have only one reason to change.”

 #### Open-Closed

> Classes and other entities should be open for extension but closed for modification.

Need to develop flexible systems that can adapt to change without breaking, design of systems where entities (classes, modules, functions, etc) are “open for extension, but closed for modification”. Defining code that is “open for extension” as code to which you can add new behavior, and code that is “closed for modification” as code that is “inviolate” in that it’s design should never be changed once implemented.

The more a given entity knows about how another one is implemented, the more we can say that they are coupled. Therefore, if one of the two entities is changed, then the other must be changed too.

 #### Liskov Substitution

> Objects should be replaceable by their subtypes. Let Φ(x) be a property provable about objects x of type T. Then Φ(y) should be true for objects y of type S where S is a subtype of T. 

The principle defines that objects of a superclass shall be replaceable with objects of its subclasses without breaking the application. That requires the objects of your subclasses to behave in the same way as the objects of your superclass. You can achieve that by following a few rules, which are pretty similar to the design by contract concept defined by Bertrand Meyer.

An overridden method of a subclass needs to accept the same input parameter values as the method of the superclass. That means you can implement less restrictive validation rules, but you are not allowed to enforce stricter ones in your subclass. Otherwise, any code that calls this method on an object of the superclass might cause an exception, if it gets called with an object of the subclass.

Similar rules apply to the return value of the method. The return value of a method of the subclass needs to comply with the same rules as the return value of the method of the superclass. You can only decide to apply even stricter rules by returning a specific subclass of the defined return value, or by returning a subset of the valid return values of the superclass.

If you decide to apply this principle to your code, the behavior of your classes becomes more important than its structure. Unfortunately, there is no easy way to enforce this principle. The compiler only checks the structural rules defined by the Java language, but it can’t enforce a specific behavior.

You need to implement your own checks to ensure that your code follows the Liskov Substitution Principle. In the best case, you do this via code reviews and test cases.

 #### Interface Segregation

> Clients should not be forced to depend upon methods that they do not use.

Similar to the Single Responsibility Principle, the goal of the Interface Segregation Principle is to reduce the side effects and frequency of required changes by splitting the software into multiple, independent parts.

ISP splits interfaces that are very large into smaller and more specific ones so that clients will only have to know about the methods that are of interest to them. Such shrunken interfaces are also called role interfaces.

It’s tempting to add a new method to an existing interface even though it implements a different responsibility and would be better separated in a new interface. That’s often the beginning of interface pollution, which sooner or later leads to bloated interfaces that contain methods implementing several responsibilities.

Please check carefully if an interface hierarchy is the right approach, or if you should define a set of interfaces.

 #### Dependency Inversion

The general idea of this principle is as simple as it is important: 

> High-level modules, which provide complex logic, should be easily reusable and unaffected by changes in low-level modules, which provide utility features.

To achieve that, you need to introduce an abstraction that decouples the high-level and low-level modules from each other.

Based on this idea, Robert C. Martin’s definition of the Dependency Inversion Principle consists of two parts:

1. High-level modules should not depend on low-level modules. Both should depend on abstractions.
2. Abstractions should not depend on details. Details should depend on abstractions.

The design principle does not just change the direction of the dependency, as you might have expected when you read its name for the first time. It splits the dependency between the high-level and low-level modules by introducing an abstraction between them. So in the end, you get two dependencies:
# Design Patterns
Design Patterns are reusable programming solutions that have been used in various real-world contexts, and have proved to produce expected results. They are shared among programmers and continue being improved over time.

This topic is popular thanks to the book title _Deisng Patterns: Elements of Reusable Object-Oriented Software_ by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides. (Gang of four or GOF)

Quote from the Gang of Four book:

> A design pattern systematically names, motivates, and explains a general design that addresses a recurring design problem in object-oriented systems. It describes the problem, the solution, when to apply the solution, and its consequences. It also gives implementation hints and examples. The solution is a general arrangement of objects and classes that solve the problem. The solution is customized and implemented to solve the problem in a particular context.

---

 #### Disclaimer

Though examples of these design patterns may be provided for you, within this collection, in different programming languages, the main focus here will come from a Python language perspective.
# Design Patterns: Gamma Categorization
Design patterns are typically split into three categories. This is called _Gamma Categorization_ after Erich Gamma,
one of GoF authors. 

 #### Creational Patterns

* Deal with the creation (construction) of objects
* Explicit (constructor) vs implicit (DI, reflection, etc)
* Wholesale (single statement) vs piecewise (step-by-step)

 #### Structural Patterns

* Concerned with the structure (e.g., class members)
* Many patterns are wrappers that mimic the underlying class' interface
* Stress the importance of good API design

 #### Behavioral patterns

* They're all different, no central theme
# Design Patterns: Creational
>  Creational patterns provide ways to instantiate single objects or groups of related objects

* Builder
* Factory
    * Abstract
    * Method
* Prototype
* Singleton

Their goal es to provide better alternatives for situations where direct object creation, wich in Python happens within the `__init__()` function, is not convenient.

---

 # Builder

The builder pattern allows for the step-by-step creation of complex objects using the correct sequence of actions. The construction is controlled by a director object that only needs to know the type of object it is to create.

[--> Reference <--](http://www.blackwasp.co.uk/Builder.aspx)

 #### Motivation

Having an object with 10 initializer arguments is not productive. Instead, opt for piecewise construction.
Builder provides an API for constructing an object step-by-step.

 #### Summary

* A builder is a separate component for building an object
* Can either give builder an initializer or return it via a static function
* To make builder fluent, return `self`
* Different facets of an object can be built with different builders working in tandem via a base class


 #### Use cases

When we known that an object must be created in multiple steps, and different representations of the same construction are required. These requirements exist in many applications such as page generator, document convertes, and user interface form creators.

This may be a solution to the _telescopic constructor problem_ that occurs when we are forced to create a new constructor for supporting different ways of creating an object. We end up with many constructors and long parameter lists, which are hard to manage. Fortunaly, this problen doesn't exist in Python as we can used named parametrs, or argument list unpacking.


---

 # Factory

The factory pattern is used to replace class constructors, abstracting the process of object generation so that the type of the object instantiated can be determined at run-time.

[--> Reference <--](http://www.blackwasp.co.uk/FactoryMethod.aspx)

A good example of the use of the factory pattern is when creating a connection to a data source if the type of the data source will be selected by the end-user using a graphical interface. In this case, an abstract class named "DataSource" may be created that defines the base functionality of all data sources. Many concrete subclasses may be created, perhaps "SqlDataSource", "XmlDataSource", "CsvDataSource", etc, each with specific functionality for a different type of data. At run-time, a further class, perhaps named "DataSourceFactory", generates objects of the correct concrete class based upon a parameter passed to the factory method.

 #### Motivation

* Object creation logic becomes too convoluted
* Initializer is not descriptive
  * Cannot overload constructor with same sets of arguments with different names
  * Can turn into 'optional parameter hell'
* Wholesale object creation (non-piecewise, unlike _Builder_) can be outsourced to
  * A separate method (_Factory Method_)
  * That may exist in a separate class (_Factory_)
  * Can create hierarchy of factories (_Abstract Factory_)

 #### Use cases

If you realize that you cannot track the objects created by your application because the code that creates them is in many diferent places instead of in a single method, you should consider using the factory method. The factory method centralized object creation and tracking your objects become much easier.

The factory method is also useful when you want to decouple object creation from object usage. We are not coupled/bound to a specific class when creating an object, we just provide partial information about what we want by calling a function. This means that introducing changes to the function is easy and does not require changes to the code that uses it.

A factory method can improe the performance and memory usage by creating new objects only if it is absolutely necessary.

If we find out that our application requires many factory methods, whichi t makes sense to combine to create a family of objects, we end up with an abstract factory. Abstract factory is usually not very visible from a user's point of view, when the factory method  is being used, that it gives us the ability to modify the behaviour of our application dynamically (at runtime) by changing the active factory method. A classic example is the ability to change themes of an application for the user while the application is in use, without the need to terminate it and start it again.

---

 # Prototype

The prototype pattern is used to instantiate a new object by copying all of the properties of an existing object, creating an independent clone. This practise is particularly useful when the construction of a new object is inefficient.

In general, when an object is cloned, the new object is either a shallow or deep copy. A shallow copy duplicates all of the object's properties. If any property contains a reference type, the reference is copied. This means that changes to the referenced object are visible in both the clone and the original object. A deep copy clones the main object and all child objects. Any properties of reference types are also cloned, giving a truly independent copy. The prototype pattern usually generates deep copies, though this is dependant upon the situation.

[--> Reference <--](http://www.blackwasp.co.uk/Prototype.aspx)

 #### Motivation

* Complicated objects aren't designed from scratch
* Existing (partially or fully constructed) design is a Prototype
* We make a copy of the prototype and customize it (deep copy)
* We make the cloning convenient (e.g., via a _Factory_)

 #### Use cases

Prototype pattern is usefull when one needs to create objects based on an existing object by using a __cloning__ technique. The idea is to use a copy of that object's complete structure to produce the new object. We will see that this is almost natural in Python because we have a __copy feature__ that helps greatly in using this technique.

Useful when we have an existing object that needs to stay untouched, and we want to create an exact copy of it, allowing changes in some parts of the copy.

There is also the frequent need for duplicating an object that is populated from a database and has references to other database-based objects. It is costly to clone such a complex object (multiple queries to a database), so a prototype is a convenient way to solve the problem.

---

 # Singleton

The singleton pattern ensures that only one object of a particular class is ever created. All further references to objects of the singleton class refer to the same underlying instance.

[--> Reference <--](http://www.blackwasp.co.uk/Singleton.aspx)

 #### Motivation

For some components it only makes sense to have one in the system
* Database repository
* Object factory

Constructor calls may be expensive
* We want initialization to only happen once
* We provide everyone with the same instance

Want to prevent anyone creating additional coppies

 #### Use cases

Useful when we need to create one and only one object, for example to store and mantain a global state for our program.

Other possible cases are:

* Controlling concurrent access to a shared resource. For example, the class managing the connection to a database.
* A service or resource that is transveral in the sense that it can be accessed from different parts of the application or by different users and do its work. For example, the class at the core of the logging system or utility.
# Design Patterns: Structural
> Structural patterns provide a manner to define relationships between classes or objects.

* Adapter
* Bridge
* Composite
* Decorator
* Facade
* Proxy

A structural design pattern proposes a way of __composing objects for creating new functionality__.

---

 # Adapter

The adapter pattern is used to provide a link between two otherwise incompatible types by wrapping the "adaptee" with a class that supports the interface required by the client.

[--> Reference <--](http://www.blackwasp.co.uk/Adapter.aspx)

 #### Use cases

Usually, one of the two incompatible interfaces is either foreign or old/legacy. If the interface is foreign, it means that we have no access to the source code. If it is old, it is usually impractical to refactor it.

Using an adapter for making things work after they have been implemented is a good approach because it does not require access to the source code of the foreign interface. It is also often a pragmatic solution if we have to reuse some legacy code.


 # Bridge

The bridge pattern is used to separate the abstract elements of a class from the implementation details, providing the means to replace the implementation details without modifying the abstraction (decouple an implementation from its abstraction).

[--> Reference <--](http://www.blackwasp.co.uk/Bridge.aspx)

 #### Use cases

In the software realm, _device drivers_ are often cited as an example of the bridge pattern, when the developers of an OS defines the interface for device vendors to implement it.

The bridge pattern is a good idea when you want to share an implementation among multiple objects. Basically, instea of implementing several specialized classes, defining all that is required within each class, you can define the following special components:

* An abstraction that applies to all the classes
* A separate interface for the different objects involved

 # Composite

 The composite pattern is used to create hierarchical, recursive tree structures of related objects where any element of the structure may be accessed and utilised in a standard manner.

[--> Reference <--](http://www.blackwasp.co.uk/Composite.aspx)

 # Decorator

The decorator pattern is used to extend or alter the functionality of objects at run-time by wrapping them in an object of a decorator class. This provides a flexible alternative to using inheritance to modify behaviour.

[--> Reference <--](http://www.blackwasp.co.uk/Decorator.aspx)

 #### Motivation

* Want to augment an object with additional functionality
* Do not want to rewrite or alter existing code
* Want to keep new functionality separate
* Need to be able to interact with existing structures
* Two options
  * Inherit from required object (if possible)
  * Build a Decorator, which simply references the decorated object(s)

 #### Use cases 

A Python decorator is a __callabe__ that gets a function object as input, and returns another function object. It is a commonly used technique for extending the behavior of a function, method, or class.

The decorator pattern shines when used for implementing __cross-cutting concerns__:

* Data validation
* Caching
* Logging
* Monitoring
* Debugging
* Business rules
* Encryption

In general, all parts of an application that are generic and can be applied to many other parts of it are considered to be cross-utting concerns.

Another popular example of using the decorator pattern is __graphical user interface__ (GUI) toolkits, as we want to add features such as borders, shadows, colors, and scrolling, to individual components/widgets.

 # Facade

The facade pattern is used to define a simplified interface to a more complex subsystem. It helps us to hide the internal complexity of our systems and expose only what is necessary to the client through a simplified interface. In essence, is an abstraction layer implemented over an exissting complex system.

[--> Reference <--](http://www.blackwasp.co.uk/Facade.aspx)

 #### Motivation

* Balancing complexity and presentation/usability
* Typical home, same as software!
  * Many subsystems (electrical, sanitation)
  * Complex internal structure (e.g., floor layers)
  * End user is not exposed to internals

 #### Use Cases
* Simple entrypoint to a complex syste
* Kernels
* Bank systems

 # Flyweight

The flyweight pattern is used to reduce the memory and resource usage for complex models containing many hundreds, thousands or hundreds of thousands of similar objects. Flyweight is all about improving performance and memory usage.

[--> Reference <--](http://www.blackwasp.co.uk/Flyweight.aspx)

 #### Motivation

* Avoid redundancy when storing data
* E.g., MMORPG
  * Plenty of users with identical first/last names
  * No sense in storing same names over and over again
  * Store a list of names and references to them
* E.g., bold or italic text formatting
  * Don't want each character to have a formatting character
  * Operate on ranges (e.g., line number, start/end positions)

 #### Use cases

* Al embedded systems (phones, tablets, games consoles, microcontrollers, etc)
* Performance-critical applications (games, 3-D graphics processing, real-time systems, etc)

The GoF book lists the following requirements that need to be satisfied to effectively use the flyweight pattern:

* The application needs to use a large number of objects
* There are so many objects that it's too expensive to store/render them
* Once the mutable state is removed (because if it is required, it should be passed explicitly to flyweight by the client code), many groups of distinct objects can be replaced by relatively few shared objects
* Object identity is not important for the application

 # Proxy

The proxy pattern is used to provide a surrogate or placeholder object, which references an underlying object. The proxy provides the same public interface as the underlying subject class, adding a level of indirection by accepting requests from a client object and passing these to the real subject object as necessary.
Basically, it's a class that functions as an interface to a particular resource that may be remote, expensive to construct or may require logging or some other added functionality.

[--> Reference <--](http://www.blackwasp.co.uk/Proxy.aspx)

 ### Four well-known types

1. __Remote proxy__, which acts as the local representation of an object that really exists in a different address space
2. __Virtual proxy__, which uses a lazy intialization to defer the creation of a computationally expensive object until the moment it is actually needed.
3. __Protection/protective proxy__, which controls access to a sensitive object.
4. __Smart (reference) proxy__, which performs extra actions when an object is accessed. 

 #### Motivation

* You are calling `foo.Bar()`
* This assumes that `foo` is in the same process as `Bar()`
* What if, later on, you want to put all `Foo`-related operations into a separate process
  * Can you avoid changing your code?
* Proxy to the rescue!
  * Same interface, entirely different behavior
* This is called __communication proxy__
  * Other types: _logging, virtual, guarding, ..._

 #### Use Cases

* Used when creating a distributed system using either a private network or the cloud. In a distributed system, some objects exist in the local memory, and some objects exist in the memoy of remote computers. If we don't want the client code to be aware of such differences, we can create a remote proxy that hides/encapsulates them, making the distributed nature of the application transparent.
* Used when our application is suffering from performance issues due to the early creation of expensive objects. Introducing lazy intialization using a virtual proxy to create objects only a t the moment they are actually required.
* Used to check if a user has sufficient privileges to access a piece of information. A protection/protective proxy can handle all security related actions.
* Used when our application uses multiple threads and we want to move the burden of thread safety from the client code to the application. in this case, we can create a smart proxt to hide the thread-safety complexities from the client.
* An __object-relational mapping__ (ORM) API is also an example of how to use a remote proy. Provide OOP-like access to a relational database. An ORM acts as a proxy to a relational database that can be actually located anywhere, either at a local or remote server.
# Design Patterns: Behavioural
> Behavioural patterns define manners of communication between classes and objects.

* Chain of Responsability
* Command
* Interpreter
* Iterator
* Mediator
* Memento
* Observer
* State
* Strategy
* Template Method
* Visitor

---

 # Chain of Responsability

The chain of responsibility pattern is used to process varied requests, each of which may be dealt with by a different handler.

[--> Reference <--](http://www.blackwasp.co.uk/ChainOfResponsability.aspx)
 
Useful when we want to give a chance to multiple objects to satisf a single request, or when we don't know in advance which object should process a specific request.

1. We start by sending a request to the first object in the chain
2. The object decides wether it should satisfy the request or not
3. The object forwards the request to the next object
4. This procedure is repeated until we reach the end of the chain


 #### Motivation

A chain of components who all get the chance to process a command or a query, optionally having a default processing implementation and an ability to terminate the process chain.

 #### Use Cases

* When we don't know which objet should satisfy a request in advance
* We know that more than one object might need to process a single request
* Event-based programming, a single event such as a click, can be caught by more than one listener.

---

 # Command

The command pattern is used to express a request, including the call to be made and all of its required parameters, in a command object. The command may then be executed immediately or held for later use.

[--> Reference <--](http://www.blackwasp.co.uk/Command.aspx)

Helps us encapsulate an operation (undo, redo, copy, paste, and so forth) as an object. This means we create a class that contains all the logic and methods required to implement the operation.

 #### Motivation

* We don't have to execute a command directly. It can be executed at will.
* The object that invokes the command is decoupled from the object that knows how to perform it. The invoker does not need to know any implementation details about the command.
* If it makes sense, multiple commands can be grouped to allow the invoker to execute them in order.

 #### Use cases

* GUI buttons and menu items (PyQt as example)
* Any operation
* Transactional behavior and logging
* Macros (sequence of actions that can be recorded and executed on demand)

---

 # Interpreter

The interpreter pattern is used to define the grammar for instructions that form part of a language or notation, whilst allowing the grammar to be easily extended.

Does so by turning into separate lexical tokens (_lexing_) and then interpreting sequences of said tokens (_parsing_).

[--> Reference <--](http://www.blackwasp.co.uk/Interpreter.aspx)

Give the ability to nonbeginner users and domain experts to use a simple language, to get more productive in doing what they need to do with the application.

We usually want to create a __domain-specific language (DSL)__. 

Internal DSLs are built on top of a host programming language. Its advantages are that we don't have to worry about creating, compiling, and parsing grammar because these are already taken care of by the host language. The disadvantage is that we are constrained by the features of the host language.
 
External DSLs do not depend on host languages. The creator of the DSL can decide all its aspects (grammar, syntax, and so forth), but they are also responsbile for creating a parser and compiler for it.

The interpreter pattern is related only to internal DSLs.

Interpretr does not address parsing at all. It assumes that we already have the parsed data in some convenient form. This can be an __abstract syntax tree (AST)__ or any other handy data structure.

 #### Motivation

* Textual input needs to be processed
* Programming languages compilers, interpretes, IDES, HTML and XML, Regexp...
* Turning strings into OOP based structures in a complicated process

 #### Use Cases

* Offer a simple langauge to domain experts and advanced users
* Offer right programming abstractions to make them productive
* Offer a language that hides the peculiarities of the host language and offers a more human-redeable syntax

---

 # Iterator

The iterator pattern is used to provide a standard interface for traversing a collection of items in an aggregate object without the need to understand its underlying structure.

[--> Reference <--](http://www.blackwasp.co.uk/Iterator.aspx)

Efficient way to handle a container of objects and traverse to these members one at a time.
 
 #### Motivation

* Traversal is a core functionality of various data structures
* An _iterator_ is a class that facilitates the traversal
    * Keeps a reference to the current element
    * Knows how to move to a different element
    * Knows when it's done and there are no elements to move to
* JavaScript supports this through:
    * `Symbol.iterator` that returns
    * an interator object with a function called `next` that
    * returns an object containing:
        * `value` being iterated
        * `done` flag indicating whether iteration is finished
    * An iterator object itself can also be made iterable

---

 # Mediator

The mediator pattern is used to reduce coupling between classes that communicate with each other. Instead of classes communicating directly, and thus requiring knowledge of their implementation, the classes send messages via a mediator object.

[--> Reference <--](http://www.blackwasp.co.uk/Mediator.aspx)
 
 #### Motivation

* Components may go in and out of a system at any time
    * Chat room participants
    * Players in an MMORPG
* It makes no sense for them to have direct references to one another
    * Those references may go dead
* Solution: have them all refer to some central component that facilitates communication

---

 # Memento

The memento pattern is used to capture the current state of an object and store it in such a manner that it can be restored at a later time without breaking the rules of encapsulation.

[--> Reference <--](http://www.blackwasp.co.uk/Memento.aspx)

Helps add support for Undo and/or History in an application.
 
 #### Motivation

* An object or system goes through changes
    * e.g., a bank account gets deposits and withdrawals
* There are different ways of navigating those changes
* One way is to record every change (__Command__) and teach a command to undo intself
* Another is to simple save snapshots of the system (__Memento__).

 #### Use Cases

* Provide some sort of _undo_ and _redo_ capability for your users
* UI dialog with OK/Cancel buttons, where we should store the state of the object on load, and if the users chooses to cancel, restore the initial state of the object.

---

 # Observer

The observer pattern is used to allow an object to publish changes to its state. Other objects subscribe to be immediately notified of any changes.

[--> Reference <--](http://www.blackwasp.co.uk/Observer.aspx)
 
 #### Motivation

* We need to be informed when certain things happen
    * Object's property changes
    * Object does something
    * Some external event occurs
* We want to listen to events and be notified when they occur
    * Notifications should include useful data
* Want to unsubscribe from events

 #### Use Cases

* Inform/update one or more objects (_observers/subscribers_) about a cange that happened on a given object (_subject/publisher/observable_).
* News feeds and notifications
* Social networking
* __Event-driven systems__

---

 # State

The state pattern is used to alter the behaviour of an object as its internal state changes. The pattern allows the class for an object to apparently change at run-time.

[--> Reference <--](http://www.blackwasp.co.uk/State.aspx)

> The state design pattern allows for full encapsulation of an unlimited number of states on a context for easy maintenance and flexibility.
 
 #### Motivation

Consider an ordinary telephone, what you do with it depends on the state of the phone
    * If it's ringing or you want to make a call, you can pick it up
    * Phone must be off the hook to talk/make a called
    * If you try calling someone, and it's busy, you put the handset down
Changes in state can be explicit or in response to event (__Observer__).

 #### Use cases

* All problems that can be solved using state machines
* Process model for an operating/embedded systems
* Programming language compiler implementaton
* Lexical and syntatic analysis can use states to build abstract syntax trees
* Event-driven systems (transitions from one state to another triggers an event/message)

---

 # Strategy

The strategy pattern is used to create an interchangeable family of algorithms from which the required process is chosen at run-time.

[--> Reference <--](http://www.blackwasp.co.uk/Strategy.aspx)
 
 #### Motivation

* Many algorithms can be decomposed into higher and lower level parts
* Making tea can be decomposed into
    * Process of making a hot beverage
    * Tea-specific things
* High-level algorithm can then be reused for making coffe or hot chocolate
    * Supported by beverage-specific strategies

 #### Use Cases

* Whenever we want to be able to apply different algorithms dynamically and transparently
* Different resource filters
    * Authentication
    * Logging
    * Data compression
    * Encryption

---

 # Template Method

The template method pattern is used to define the basic steps of an algorithm and allow the implementation of the individual steps to be changed.

[--> Reference <--](http://www.blackwasp.co.uk/TemplateMethod.aspx)

Focus on eliminating code redundancy. The idea is that we should be able to redefine certain parts of an algorithm without changing its structure.
 
 #### Motivation

* Algorithms can be decomposed into common parts + specifics
* __Strategy__ pattern does this through _composition_
    * High-level algorithm uses an interface
    * Concrete implementations implement the interface
* __Template Method__ does the same thing through _inheritance_
    * Overall algorithm makes use of empty ('abstract') members
    * Inheritors override those members
    * Parent template method invoked

---

 # Visitor

The visitor pattern is used to separate a relatively complex set of structured data classes from the functionality that may be performed upon the data that they hold.

[--> Reference <--](http://www.blackwasp.co.uk/Visitor.aspx)
 
 #### Motivation

* Need to define a new operation on an entire class hierarchy
    * E.g., make a document model printable to HTML/Markdown
* Do not want to keep modifying every class in the hierarchy
* Need access to the non-common aspects of classes in the hierarchy
* Create an external component to handle rendering
    * But avoid explicit type checks
# Model-View-Controller Pattern
One of the design principles related to software engineering is the __separation of concerns (SoC)__ principle. The idea behind the SoC principle is to split an application into distinct sections, where each section addresses a separate concern. Examples of susch concerns are the layers used in a layered design (data access layer, business logic layer, presentation layer, and so forth). Using the SoC principle simplifies the development and maintenance of software applications.

The __MVC ppattern is the SoC principle applied to OOP__. The name of the pattern comes from the three main components used to split a software application, the model, the view and the controller.

MVC is consired an __architectural pattern__ rather than a design pattern.

 #### Model

The core component. It represents knowledge. It contains and manages the __business logic, data, state, and rules of an application__.

A Model is considered __smart__ because it does the following:
* Contains all the validation/business rules/logic
* Handles the state of the application
* Has access to application data (database, cloud, etc)
* Does not depende on the UI

 #### View

Visual representation of the model. Examples of views are a computer GUI, text output of a computer terminal, charts, and so forth.

The view only displays the data, it doesn't handle it.

A View is considered __dumb__ because it does the following:
* Displays the database
* Allows the user to interact with it
* Does only minimal processing, usually provided by a template language
* Does not store any data
* Does not access the application data directly
* Does not contain validation/business rules/logic

 #### Controller

The link/glue between the model and view. All communication between the model and the vie happens through a controller.

A big benefit that MVC provides the ability to use more than one view (even at the same time) without modifying the model. To achieve __decoupling between model and its representation__, every view typically needs its own controller. If the model communicated directly with a specific view, we wouldn't be able to use multiple iews.

A Controller is considered __thin__ because it does the following:
* Updates the model when the user interacts with the view
* Updates the view when the model changes
* Processes the data before delivering it to the model/view if necesarry
* Does not display the data
* Does not access the application data directly
* Does not contain validation/business rules/logic

 ### Tipical usage flow

1. User triggers a view by an action (click, type, touch, and so on)
2. View informs the controller of the user's action
3. Controller processes user input and interacts with the model
4. Model performs all the necessary validation and state changes, and it informs the controller about what should be done
5. Controller instructs the view to update and display appropiate output, following the instructions that are given by the model.

 ### Use cases

There are variations of MVC, like:
* Model-View-Adapter (__MVA__)
* Model-View-Presenter (__MVP__)

Benefits it provides:
* Separation between view and model allows graphic designers to focus on the UI part and programmers on development, without interfering with each other.
* Because of the loose couplin between view and model, each part can be modified/extended witohut afecting the other
* Maintaining each part is easier because the responsibilities are clear
