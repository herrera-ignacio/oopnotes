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
# Design Principles
 ## SOLID

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
# Design Patterns: Structural
> Structural patterns provide a manner to define relationships between classes or objects.

* Adapter
* Bridge
* Composite
* Decorator
* Facade

---

 # Adapter

The adapter pattern is used to provide a link between two otherwise incompatible types by wrapping the "adaptee" with a class that supports the interface required by the client.

[--> Reference <--](http://www.blackwasp.co.uk/Adapter.aspx)


 # Bridge

The bridge pattern is used to separate the abstract elements of a class from the implementation details, providing the means to replace the implementation details without modifying the abstraction.

[--> Reference <--](http://www.blackwasp.co.uk/Bridge.aspx)

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

 # Facade

The facade pattern is used to define a simplified interface to a more complex subsystem.

[--> Reference <--](http://www.blackwasp.co.uk/Facade.aspx)

 #### Motivation

* Balancing complexity and presentation/usability
* Typical home, same as software!
  * Many subsystems (electrical, sanitation)
  * Complex internal structure (e.g., floor layers)
  * End user is not exposed to internals

 # Flyweight

The flyweight pattern is used to reduce the memory and resource usage for complex models containing many hundreds, thousands or hundreds of thousands of similar objects.

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

 # Proxy

The proxy pattern is used to provide a surrogate or placeholder object, which references an underlying object. The proxy provides the same public interface as the underlying subject class, adding a level of indirection by accepting requests from a client object and passing these to the real subject object as necessary.
Basically, it's a class that functions as an interface to a particular resource that may be remote, expensive to construct or may require logging or some other added functionality.

[--> Reference <--](http://www.blackwasp.co.uk/Proxy.aspx)

 #### Motivation

* You are calling `foo.Bar()`
* This assumes that `foo` is in the same process as `Bar()`
* What if, later on, you want to put all `Foo`-related operations into a separate process
  * Can you avoid changing your code?
* Proxy to the rescue!
  * Same interface, entirely different behavior
* This is called __communication proxy__
  * Other types: _logging, virtual, guarding, ..._
# Design Patterns: Behavioural
> Behavioural patterns define manners of communication between classes and objects.

* Chain of Responsability
* Command
* Interpreter

---

 # Chain of Responsability

The chain of responsibility pattern is used to process varied requests, each of which may be dealt with by a different handler.

[--> Reference <--](http://www.blackwasp.co.uk/ChainOfResponsability.aspx)
 
 #### Motivation

A chain of components who all get the chance to process a command or a query, optionally having a default processing implementation and an ability to terminate the process chain.

---

 # Command

The command pattern is used to express a request, including the call to be made and all of its required parameters, in a command object. The command may then be executed immediately or held for later use.

[--> Reference <--](http://www.blackwasp.co.uk/Command.aspx)

 #### Motivation

* Ordinary statements are perishable
    * Cannot undo member assignment
    * Cannot directly serialize a sequence of actions (calls)
* Want an object that represents an operation
    * `person` should change its `age` to value x
    * `car` should do `explode()`
* Uses GUI commands, multi-level undo/redo, macro recording, more...

---

 # Interpreter

The interpreter pattern is used to define the grammar for instructions that form part of a language or notation, whilst allowing the grammar to be easily extended.

Does so by turning into separate lexical tokens (_lexing_) and then interpreting sequences of said tokens (_parsing_).

[--> Reference <--](http://www.blackwasp.co.uk/Interpreter.aspx)
 
 #### Motivation

* Textual input needs to be processed
* Programming languages compilers, interpretes, IDES, HTML and XML, Regexp...
* Turning strings into OOP based structures in a complicated process
