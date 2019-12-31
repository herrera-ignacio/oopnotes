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
# Index
* [Index](#index)
* [Fundamentals - Classes](#fundamentals---classes)
* [Fundamentals - Objects](#fundamentals---objects)
* [Fundamentals - Run-time and Compile-time](#fundamentals---run-time-and-compile-time)
* [Fundamentals - Aggregation vs Association](#fundamentals---aggregation-vs-association)
* [Fundamentals - Inheritance](#fundamentals---inheritance)
* [Fundamentals - Parameterized types - Generics](#fundamentals---parameterized-types---generics)
* [Fundamentals - Composition](#fundamentals---composition)
* [Fundamentals -  Polymorphism](#fundamentals----polymorphism)
* [Fundamentals - Delegation](#fundamentals---delegation)
* [Fundamentals - Causes of Redesign](#fundamentals---causes-of-redesign)
* [Design Principles for OOP](#design-principles-for-oop)
* [Design Principles - SOLID](#design-principles---solid)
* [Design principles - Interfaces](#design-principles---interfaces)
* [Design Patterns](#design-patterns)
* [Design Patterns - Gamma Categorization](#design-patterns---gamma-categorization)
* [Design Patterns - Creational](#design-patterns---creational)
* [Design Patterns - Structural](#design-patterns---structural)
* [Design Patterns - Behavioural](#design-patterns---behavioural)
* [Model-View-Controller Pattern](#model-view-controller-pattern)
* [Observer Pattern in Reactive Programming](#observer-pattern-in-reactive-programming)
* [Microservices and Patterns for Cloud](#microservices-and-patterns-for-cloud)
# Fundamentals - Classes
Classes in object-oriented programming, are blueprints for creating objects (a particular data structure), providing initial values for state (attributes) and implementations or behavior (methods).

 #### Abstract Classes

An __abstract class_' main purpose is to define a common interface for its subclasses. it will delegate part or all of its implementation in the operations defined in its subclasses, hence an instance of an abstract class cannot be created.

The operations that an abstract class defines but does not implement are called _abstract operations_. Classes thatare not abstract are called __concrete classes__.

__Subclasses__ can redefine the behavior of their parent classes. More specifically, an operation defined by its parent class. The redefinition allow subclasses to handle a petition instead of their parent.

 #### Signature

Each operation declared by an object specifies:
* name of the operation
* objects that it takes as parameters
* return value of the operation

 #### Interface

Interface is the set of all the signatures defined by the operations of an object. Charaterizes the complete set of requests that can be sent to the object. 

Objects are only known through its interface, there is no other way to know something about an object or ask it to do something.

 #### Class vs Type

The __Class__ of an object defines how an object is implemented, the internal state of an object and the implementation of its operations. 

The __Type__ of an object only referes to its interface, the set of requests to which it can respond. Part of the interface of an object can be characterized by one type, and others parts by others. Two objects of the same type only need to share parts of their interfaces.

One type is said to be a __subtype__ of another if its interface contains the interface of its supertype.

An object can have many types, and objects of different classes can have the same type.

There is a close relationship between classes and type, since a class defines the operatiosn that an object can perform, it also defines the type of the object.

When we say that an object is an instance of a class, we mean that the object supports the interface defined by the class.
# Fundamentals - Objects
An object __encapsulates__ both data and procedures (methods) that operate on that data. An object performs an operation when it receives a request / message from a customer and they are the only way to get an object to execute an operation. In turn, operatiosn are the only way to change the internal data of an object, due to these restriction it is said that the internal state of an object is encapsulated, since it cannot be accessed directly and its representation is not visible from the outside of the object.

 #### Dynamic links

Different objects that support identical requests may have different implementations of the operations that satisfy those requests. __The association at runtime between a request to an object and one of its operations__ is what is known as a dynamic link.

The dynamic link means that sending a request does not bind us to a particular implementation until runtime.
# Fundamentals - Run-time and Compile-time
The code structure is set at __compile time__, and consists of classes with static inheritance relationships.

__Runtime__ structure of an object-oriented program usually has little resemblence to the structore of its code. Runtime structure consists of changing networks of objects that communicate with each other.

To a large extent both structures are _independent_.

The runtime structure of a system must be imposed more by the designer than by language. Relationships between objects and their types must be designed very carefully, because they will determine the quality of the runtime structure. This makes that in general, the runtime structures are not clear in the code until the patterns are understood.
# Fundamentals - Aggregation vs Association
__Aggregation__ implies that an object owns another or is responsible for it. It implies that the aggregate object and the owner have the same life. 

__Association__ implies that one object simply knows anoter. They may ask for operations among themselves, but they are not responsible for each other. It is a weaker relationship than aggregation and represents much les coupling between objects.

Ultimately, association and aggregation are determined more by their intentions than by their explicit language mechanisms.
# Fundamentals - Inheritance
* Class inheritance
* Interface inheritance
 
 ### Class inheritance

Inheritance of __classes__ defines the implementation of an object in terms of the implementation of another object. In short, it is a mechanism to share code and its representation.

 ### Interface inheritance

__Interface__ inheritance or __subtype__ only defines when an object can be used.

 ### Inheritance

Statically defined at compiled time and is simple to use as it is allowed directly by the programming language. It makes it easier to modify the implementation.

When a subclass redefines any of the operations, it can also affect the operations from which it inherits.

 #### Disadvantages

* You cannot change legacy implementations of parent classes at runtime
* Parent classes usually define at least part of the physical representation of their subclasses
* As the inheritance exposes the details of his father's implementation to the subclass, '_it breaks the encapsulation_'
* The implementation of the subclass is linked in such a way to that of its parent class that any change in that of the parent will force the subclass to be changed, which can cause problems when trying to reuse a subclass
* When any aspect of the legacy implementation is not appropiate for new problem domains, the parent class must be rewritten or completely replaced. This dependence limits flexibility and reusability.

# Fundamentals - Parameterized types - Generics
This techniques allows you to define a type without specifying all the other types you use. Unspecified types are provided as parameters. The implementation language will create a particularized version of the class template for each type of element.

Parameterized types give us a third way (in addition to inheritance of classes and composition of ojects) to combine behavior in object-oriented systems.

In addition, they can be used to customized the implementation of some pattern. Parameterized types are not necessary in languages which don't have type checking at compile time like Smalltalk.

 #### Example

As an example, to parameterize a sorting routine according to the type of operation you use to buy items, we could make the comparison be:

* A opertion implemented by subclasses (Template method)
* Responsibility of an object passed to the managment routine (Strategy)
* An argument from a C++ template that specifies the name of the function to call to buy the items

# Fundamentals - Composition
Dynamically defined at runtime through objects that have references to other objects. The composition requires that the subjects take into account the interface of others, which in turn requires carefully designed interfaces.

 #### Advantages

* Does not break encapsulation, because objects are accessed only through their interfaces
* Any object can be replaced at runtime by another as long as they are of the same type
* Implementation units are remarkably smaller
* Helps keep each class encapsulated and focused on a single task, favoring classes and hiearchies small and less favorable to becoming unmangeable monsters
* It will have more objects and fewer classes, thus the behavior of the system will depend on its relationships instead of being defined in a class
# Fundamentals -  Polymorphism
Concept that objects of different types can be accessed through the same interface. Is the provision of a single interface to entities of different types.

Dynamic link allows us to __replace objects at run time with others that have the same interface__. It allows a client to make few assumptions about objects apart from allowing a specific interface.

When a subclass inherits from a parent class, it inclues the definitions of all data and operations defined by the parent class. The objects that are instances of the subclasses will contain all the data defined by the subclass and by its parent class.

 ### Ad hoc Polymorphism

Polymorphic functions that can be applied to arguments of different types, but have differently depending on the type of the argument to which they are applied.

Also known as __function overloading__ or __operator overloading__.

```pascal
program Adhoc;

function Add(x, y : Integer) : Integer;
begin
    Add := x + y
end;

function Add(s, t : String) : String;
begin
    Add := Concat(s, t)
end;

begin
    Writeln(Add(1, 2));                   (* Prints "3"             *)
    Writeln(Add('Hello, ', 'Mammals!'));    (* Prints "Hello, Mammals!" *)
end.
```

 ### Parametric Polymorphism

Allows a function or a data type to be written generically, so that it can handle values uniformly without depending on their type. Is a way to make a language more expressive while still maintaining full static __type-safety__. 

Haskell example:
```haskell
data List a = Nil | Cons a (List a)

length :: List a -> Integer
length Nil         = 0
length (Cons x xs) = 1 + length xs

map :: (a -> b) -> List a -> List b
map f Nil         = Nil
map f (Cons x xs) = Cons (f x) (map f xs)
```

C++ example:
```
class List<T> {
    class Node<T> {
        T elem;
        Node<T> next;
    }
    Node<T> head;
    int length() { ... }
}

List<B> map(Func<A, B> f, List<A> xs) {
    ...
}
```

 ### Subtyping

Restrict the range of types that can be used in a particular case of polymporhism. Subtyping allows a function to be written to take an object of a certain type T, but also work correctly if passed an object that belongs to a type S that is a subtype of T.

```java
abstract class Animal {
    abstract String talk();
}

class Cat extends Animal {
    String talk() {
        return "Meow!";
    }
}

class Dog extends Animal {
    String talk() {
        return "Woof!";
    }
}

static void letsHear(final Animal a) {
    println(a.talk());
}

static void main(String[] args) {
    letsHear(new Cat());
    letsHear(new Dog());
}
```

 ### Static vs Dynamic implementation

Polymorphism can be distinguished by when the implementation is selected: statically (at compile time) or dynamically (at run time, typically via a virtual function). This is known respectively as static dispatch and dynamic dispatch, and the corresponding forms of polymorphism are accordingly called static polymorphism and dynamic polymorphism.

Static polymorphism executes faster, because there is no dynamic dispatch overhead, but requires additional compiler support. Further, static polymorphism allows greater static analysis by compilers (notably for optimization), source code analysis tools, and human readers (programmers). Dynamic polymorphism is more flexible but slower—for example, dynamic polymorphism allows duck typing, and a dynamically linked library may operate on objects without knowing their full type.

Static polymorphism typically occurs in ad hoc polymorphism and parametric polymorphism, whereas dynamic polymorphism is usual for subtype polymorphism.
# Fundamentals - Delegation
Delegation is a way to __make the composition as powerful for reuse as inheritance is__.

There are two objects in charge of handling a requests, __a receiving object delegates operations to its delegate__.

With inheritance, an inherited operation can always refer to the object itself through member variables such as `this` in C++ or Smalltalk `self`. To achieve the same effect with Delegation, the receiver passes himself to the delegate, so that the delegated operation can refer to him.

 #### Example

Instead of making the Window class a subclass of Rectangle, the Window class can reuse the behavior of Reactangle by saving an instance of it in a variable and delegating it the specific behavior of the rectangles (the window will contain a rectangle). Now Window must forward the requests to its rectangular instance explicitly, while it would have inherited those operations before.

Some standard design patterns use it:

* __State__: An object delegates requests to a State object that represents its current state
* __Strategy__: An object delegates a request to an object that represents a strategy to carry out
* __Visitor__: Operation that is performed on each element of an object structure is always delegated to the Visitor object

 #### Adantage

It makes it easy to combine runtime behaiors, and change the way they combine.

Our Window example can be circulated at runtime by simply changing its Rectangle instance to a Circle instance (assuming they have the same type).

 #### Disadvantage

Dynamic and highly parameterized software is more difficult to undestand than static software. There are also inneficiencies in runtime, although human inefficiencies are the most importants in the long term.

Delegation s a good design choice only when it simplifies more than it complicates. It works best when used in a very stylized way, that is, in standard patterns.
# Fundamentals - Causes of Redesign
Some of the common causes of redesign are presented alongside the design patterns that solve them.

 #### Create an object specifiying its class explicitly

Specifying  a class name when creating an object links us to a specific implementation instead of an interface. To avoid this, we must create the objects indirectly.

* Abstract Factory
* Factory Method
* Prototype

 #### Unit of specific operations

When we specify a certain operation, we are linking to a way to atisfy a request. By avoiding linking the requests to the code, we make it easier to change the way to satisfy a request, both at compile and execution time. 

* Chain of Responsability
* Command

 #### Dependency of hardware/software

The external interfaces of the operating systems and APIs vary for different hardware and software platforms. Software that dependes on a specific platform will be more difficult to port to other platforms. It can even be difficult to keep it updated on your native platform. Therefore it is important to design our systems so that their platform dependencies are limited.

* Abstract Factory
* Brige

 #### Dependency of representations or implementations

Customers of an object that know how it is represented, stored, located or implemented, may need to be modified when the object changes. Hiding that information from cutomers prevents cascading changes.

* Abstract Factory
* Bridge
* Memento
* Proxy

 #### Algorithmic Dependencies

Many time the algorithms are extended, optimized or replaced by others during development and subsequent reuse. Objects that depend on an algorithm will have to change when it changes. Those algorithms that probably change should be isolated.

* Builder
* Iterator
* Strategy
* Template Method
* Visitor

 #### Strong coupling

Strongly couplee classes are difficult to reuse separately. The strong coupling leads to monolithic systems, in which one class cannot be changed or removed without understanding and changing many others. The system thus becomes something vey dense that is difficult to learn, carry and maintain.

Low coupling increases the probability that a class can be reused and that a system can be learned, behaved, modified and extended more easily.

* Abstract Factory
* Bridge
* Chain of Responsability
* Command
* Facade
* Mediator
* Observer

 #### Add functionality through inheritance

Particularizing an object derived from another class is not usually easy. Each new class has an implementation cost (initialization, completion, etc). Defining a sublclass also requires a depp knowledge of the parent class, redefining one operation may require redefining another... In turn, inheritance can lead to an explosion of classes, where a simple etension can force you to introduce a lot of new classes.

The composition of objects in general and the delegation in particular provides flexible alternatives to inheritance to combine behavior.

* Bridge
* Chain of Responsability
* Composite
* Decorator
* Observer
* Strategy

 #### Inability to modify classes conveniently

Sometimes you have to modify a class that cannot be conveniently modified because the source code is needed and we don't have it, or maybe any chang would require modifying many of the existing subclasses.

* Adapter
* Decorator
* Visitor
# Design Principles for OOP
> Promote the composition o objects against class inheritance

> Program to interface not implementation

> Design for change

 #### Promote the composition o objects against class inheritance

We would only create new components to achieve reuse. We should be able to achieve all the functionality we need simply be assembling existing components through the compositon of objects.

 #### Program to interface, not implementation

The client code is not worried about implementation and the interface signature determines what operations can be done. This can be used to change the behavior of a program at runtime.

Do not define explicit class instances, instead use objects that adjust to the interface defined by an abstract class.

 #### Design for change

Anticipate new requirements and changes in existing requirements, and in designing systems so that they can evolve accordingly.

To design a system that is robust to these changes, one must take into account how the system may need to be changed throughout its life. A design that does not take change into account suffers the risk of having to be completely redesigned in the future.
# Design Principles - SOLID
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
# Design principles - Interfaces

> Program to interfaces, not implementations

Interfaces are just contracts or signatures and they don't know anything about implementations.

__Class inheritance__ is nothing more than a mechanism to extend the functionality of an application by reusing the functionality of parent classes. It allows you to quickly define a new type of objects based on another and get your new implementations almost effortlessly.

Reusing implementation is only part of the story. Also important is the ability of inheritance to define families of objects with identical interfaces (usually inheriting from an abstract class), being precisely what __polymorphism__ is based on.

 ### Inheritance done correctly

All classes that derive from an __abstract class__ will share their interface. This implies that a subclass simply adds or redefines operations and does not hide operations of the parent class.

All subclasses can then respond to requests in the interface of their abstract class, thus becoming all __subtypes__ of the abstract class.

 #### What this means

The client code is not worried about implementation and the interface signature determines what operations can be done. This can be used to change the behavior of a program at runtime.

 #### Manipulate objects in terms of the abstract class interface

* Users do not have to know specific types of objects they use, it is enough that they adhere to the interface that users expect
* Users do not know the classes that implement these objects, they only know the abstract classes that define the interface
* Reduce implementation dependencies between subsystems
# Design Patterns
Design Patterns are reusable programming solutions that have been used in various real-world contexts, and have proved to produce expected results. They are shared among programmers and continue being improved over time.

This topic is popular thanks to the book title _Deisng Patterns: Elements of Reusable Object-Oriented Software_ by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides. (Gang of four or GOF)

Quote from the Gang of Four book:

> A design pattern systematically names, motivates, and explains a general design that addresses a recurring design problem in object-oriented systems. It describes the problem, the solution, when to apply the solution, and its consequences. It also gives implementation hints and examples. The solution is a general arrangement of objects and classes that solve the problem. The solution is customized and implemented to solve the problem in a particular context.

Many objects of a design come from the analysis model. But object-oriented designs often end up having classes that don't have their equivalent in the real world.

Strict real-world modeling leads to a system that reflects present but not necessarily future realities. The abstractions that arise during design are essential to achieve a flexible design.

Design patterns help identify less obvious abstractions and the objects that express them.

Design patterns ensures that a system can change a concrete ways, allowing some specific aspects of the system structure to vary indenepdently of the others, thus making the system more robust against a particular change. Design patterns make use of techniques such as abstract coupling and layered structuring to promote decoupled systems.


---

 #### Disclaimer

Though examples of these design patterns may be provided for you, within this collection, in different programming languages, the main focus here will come from a Python language perspective.

 #### Good resources

* [Refactoring Guru: Design patterns diagrams and code examples!](https://refactoring.guru/design-patterns/iterator)
# Design Patterns - Gamma Categorization
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
# Design Patterns - Creational
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
# Design Patterns - Structural
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
# Design Patterns - Behavioural
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

 #### Use cases

* Make it easy to navigate through a collection
* Get the next object in the collection at any point
* Stop when you are done traversing through the collection

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

 #### Use Cases

* Keep invariant parts of the algorithms in a template and move the variant parts in action/hook methods
* Pagination is a good example
* Frameworks

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
# Observer Pattern in Reactive Programming
In simple terms, the concept of reactive programming is to __react to many events, streams of events__, while keeping our code clean.

We will fous on a framework called [ReactiveX](http://reactivex.io/) which is defined as an API for _asynchronous programming with observable streams_. The core entity in ReactiveX is called an __Observale__.

You can think of an Observable as a stream that can push or emit data to the Observer, and it can also emit events.

Here are two quotes from the documentation available:

> An Observable is the core type in ReactiveX. It serially pushes items, known as emissions, through a series of operators until it finally arrives at an Observer, where they are consumed.

> Push-based (rather than pull-based) iteration opens up powerful new possibilities to express code and concurrency much more quickly. Because an Observable treats events as data and data as events, composing the two together becomes trivial

 #### Use Cases

* __Cllection Pipeline__

> Collection pipelines are a programming pattern where you organize some computation as a sequence of operations which compose by taking a collection as output of one operation and feeding it into the next.

We can use an Observable to do operations such as __map and reduce__ or __groupby__ on sequences of objects when processing data.

Observables ca be created for diverse functions such as button events, requests, and RSS or Twitter Feeds.

 #### Implementation

We will approach a possible implementation, using `RxPY` in a Python environment.
Please check the `reactiveObserver` folder.
# Microservices and Patterns for Cloud
The idea behind __Microservice Architecture pattern__ is that we can build an application as a set of loosely coupled, collaborating services. In this architectural style, an application  consists of services that can be developed and deployed independently of one another.

Cloud patterns focused on Microservices:
* Retry
* Circuit Breaker
* Cache-Aside
* Throttling

Read more about: [Microsoft's Cloud Design Patterns](https://docs.microsoft.com/en-us/azure/architecture/patterns/)!

 #### Use cases

* Requirement to support different clients, including desktop and mobile
* Communicate with other applications using messaging
* Serve requests by accessing a database, communicating with other systems, and returning the right type of response (JSON, XML, HYML, or even PDF).
* There are logical components corresponding to different functional areas of the application

 #### Implementation

Switching from deploying a single application to deployments of many small services means that the number of things that need to be handled increases exponentially. While you might have been fine with a single application server and few runtime dependencies, when moving to microservices, the number of dependencies will increase ddrastically. Using the microservices approach also means you need to use __Containers__.

The idea is that your application server, dependencies and runtime libraries, compiled code, configurations, and so on, are inside those containers. And then, all you have to do is run services packed as containers and make sure that they can communicate with each other.

---

 ### Monolithic Architecture

Before Microservices, we had the __Monolithic Architecture__. A sigle code base for implementing all functionalities. 

Disadvantages:
* Development team has to work on maintaining the whole code base simultaneously
* More difficult to organize testing and reproduce and fix bugs
* Tests and deployments become difficult to manage as the application and its user base grows and its constraints increase

 ### Serverless

There is no provision of server resources for running and operating things. Basically, you split your application at an even more granular level (using __functions__), and you use serverless hosting vendors to deploy the services.

---

 ### Retry Pattern

_Retrying_ is an approach that is more and more needed in the context of microservices and clous-based infrastructure where components collaborate with each other, but are not developed, deployed, and operated by the same teams and parties.

In its daily operation, parts of a cloud-native application may experience what is called __transient faults or failures__, meaning some mini-issues that can look like bugs, but are not due to your application itself but to some constraints outside of you control such as the networking or the service performance. As a result, your application may dysfunction (at least, that could be the perception of your users) or even hang at some places. The answer to the risk of such failures is to put in place some retry logic, so that we pass through the issue, by calling the service again, maybe immediately of after some wait time.

 #### Examples

* Python __Retrying__ library
* Go __Pester__ library
* Java __Spring Retry__

 #### Use cases

* Alleviate the impact of identified __transient failures__ while communicating with an external component or service
* Not recomended for handling failures such as internal exceptions caused by errors in the application logic itself

---

 ### Circuit Breaker Pattern

When a failure due to the communication with an external service is likel to be long-lasting, using a retry mechanism can affect the responsiveness of the application.

With circuit breaker, you wrap a fragile function call (or an integration point with an external service) in a special object, which monitors for failures. Once the failures reach a certain threshold, the circuit breaker __trips__, and all further calls to the circuit breaker return with an error, without the protected call being made at all.

 #### Examples

* Python __pybreaker__ library
* Java __Jrugged__ library
* __Hystrix__ from Netflix, tool for dealing with latency and fault tolerance for distributed systems

 #### Use cases

* Need a component from your system to be fault-tolerant to long-lasting failures when communicating with an external service.

---

 ### Cache-Aside Pattern

In situations where data is more frequently read than updated, applications use a cache to ptimize repeated access to information stored in a database or data store.

Microsoft's documentation about Cloud-Native patterns:
> Load data on demand into a cache from a data stoe, as an attempt to improve performance, while maintaining consistency between data held in the cache and the data in the underyling data stored

 #### Examples

* __Memcached__ is commonly used as a cache server. Popular in-memory key-value store for small chunks of data from results of database calls, API calls , or HTML page content
* __Redis__
* Amazon's __ElastiCache__

 #### Use cases

* Data that doesn't change often
* Data storage that doesn't depend on the consistency of a set of entries in the storage
* Might not be suitable in cases where the cached data set is static

 #### Implementation 

* __Case 1__: When we want to fetch a data item, return the item from cache if found in it. Else, read the data from the database, put the read item in the cache and return it.
* __Case 2__: When we want to update a data item: write the item in the database and remove the correspondent entry from the cache.

---

 ### Throttling

Based on limiting the number of requests a user can send to a given web service in a given amount of time, in order to protect the resources of the service from being overused by some users.

For example, once the limit of 1000 request per day for an API is reached, next request is handled by sending an error message with __429__ HTTP status ode to the user with a message such as too many requests.

 #### Examples

* Built-in support in Django-Rest-Framework
* Django-throttle-requests is a framework for implementing application-specific rate-limiting middleware for Django projects
* flask-limiter provides rate limiting features to Flask routes

 #### Use cases

* Ensure your system continuously delivers the service as expected
* Optimie the cost of usage of the service
* Handle bursts in activity

 #### Recomended practices

* Limit the number of total requests to an API as N/day
* Limit number of requests to an API as N/day for a given IP address, country or region
* Limit number of reads or writes for authenticated users
# BDD - Test first approach
 ### Traditional testing approach

In traditional testing, you write your automated test after the code has been written, with the following assumptions:

* Automated tests can discover new bugs
* The project is managed under a waterfall lifecycle or similar, where large chunks of functionality are developed until they are _perfect_ and only then is the code deployed

These assumptions are mostly false nowadays. Automated tests cannot discover anything new but only provide feedback about whether the code behaves as specified or expected. From the point of view of preventing bugs, automated tests are only good as __regression test suites__.

> A regression test suite contains tests that prove that a bug that is already known is fixed.

Agile methodologies are all about fast feedback loops: plan a small slice of the product, implement it, deploy it, and check whether everything is as expected.

Now, deelopment team needs to be able to deliver software with a fast pace and in an incremental way. So any good engineering practice shoulg be able to enable the team to change an existing code base quickly, no matter how big it is, without a detailed full plan of the project.

 ### Test-first approach

* CODING TASK: any sensible reason to change the codebase, as a functionality
* WRITE A FAILING TEST
* MAKE THE TEST PASS
* CLEAN THE CODE (refactor)
* REPEAT!

Simple rule:

> You should only write code to fix a failing test or to write a new failing test

Summary:
* Don't write any new tests if there is not a new coding task
* A new test must always failing
* A new test should be as simple as possible
* Write only the minimum necessary code to fix a failing test, and don't bother with quality during this activity
* You can only clean or redesign your code if all the test pass, try to do it in each cycle if possible

 #### Write a failing test

We try to figure out which one is the simplest test that can fail, then, we write it and finally see it fail.

Go in small incremental steps and do not try to write a comple test.

First test might be the success case, this is simple because it establishes an example of what is valid input, and the input and expectations are simple enough. It is often useful to think of the simplest input to your system that will not behave as expected.

 #### Make the test pass

Once you have a failing test, you are allowed to write some production code to fix it. The point of all of this is that you should not write new code if there is not a good reason to do so.

In test-first, we use failing tests as a guide to know whether there is need for new code or not.

This activity means simply to write the required code to make the test pass, __as fast as you can__, making minimal changes needed to make the test pass. You should not try to write a nice algorithm or very clean code to solve the whole problem.

When you are done, run all the tests again. Maybe the test is not yet fixed as you expected, or your changes have broken another test.

 #### Clean the code

When all the tests are passing, you can start refactoring.

Just stop and think whether your code is good enough or if it needs to be redesigned. Whenver you change the code, you need to run all the tests again to check that they are all passing and you have not broken anything.

You may want to clean the test code too. After all the tests, you would probably end up with a bunch of if statements. You can use regular expression or, even better, have an array or validation rules that you can run against the input.

 #### Repeat!

When the code is good enough for you, then the cycle will end. Start from the beginning again and write a new failing test until you cannot write a new one.

---

 ### Consequences

This way of writing code loks weird at first and requires a lot of discipline from the engineers. Maybe it really adds a big overhead to the costs of small projects or prototypes, but in general, this is not true, especialy for codebases that need to be maintained during periods of over 3 months.

Test-first is just cutting the costs of developers doing manual testing anyway after each change they made to the code, by automating such activity and putting a lot of discipline in our workflow.

1. Since you write tests first, the resulting code design ends up being easily testable. This is important since you want to add tests for new bugs and make sure that changes do not break the old functionality (__regression__).
2. The resulting codebase is minimal. The whole cycle is designed to make us write just the amount of code needed to implement the required functionality, this is represented by failing tests, and you cannot write new code without a failing test.
3. Codebase can be enhanced using refactoring mechanisms. Without tests, it is very difficult to do this since you cannot know whether the code change you have done has changed the functionality.
4. Cleaning the code in each cycle makes the codebase more maintainable.
5. There is a fast feedback for the developers, by just running the test suite, you know in the moment, that the changes in the code are not breaking anything and that you are evolving the system in a good direction.
6. Since there are tests covering the code, deelopers feel more comfortable adding features to the code, fixing bus or exploring new designs.

There is, perhaps, a drawback: you cannot adopt test-first approach easiliy in a project that is in the middle of its development and has been started without this approach in mind.
# BDD or TDD?
 ### The problem with TDD

One problem with TDD is that it does not say anything about what a coding task is, when a new one should be created, or what kind of changes we should allow.

The biggest problem in classic TDD is that there is a disconnection between what the product is supposed to do and what the test suite that the development team builds is testing, as TDD does not explicitly say how to connect both worlds. This leads to a lot of teams doing TDD, but testing the wrong things, testing whether the classes behave as expected, __not whether the product behaves as expected.__

Problems:
* No clear and explicit correlation between components and features
* Test results only make sense for the engineering team
* If a component test is failing, which features are failing?
* Test checking whether component behaves according to the technical design, so if you change te design, then you need to change the tests


BDD tries to fix these problems by making the test suite directly dependent of the feature set of the product.

 ### BDD to the rescue

BDD is a test-first approach where __a new coding task can be created only when a change in the product happens__: a new requisite, a change in an existing one, or a new bug. __Dan North__ was who first coined the term BDD to the specific way of doing TDD.

BDD exposes a good insight: __we should test features instead of components__.

> Don't write any new test if there is not a change in the product

 #### Keys of BDD

* You should not add a new class or function, or change design if there is not a change in the product.
* As a change in the product always represents only a feature or bug, you only need to test those, not components or classes. There is no need to test individual classes or functions, although this does not mean that is a bad idea to do so, such tests are not viewed as essential from the BDD point of view.
* Tests are always about describing how the product behaves and never about technical details. Key difference with TDD.
* Tests should be described in a way that the stakeholders can understand to give feedback about whether they reflect their expected behavior of the system, that is why, in BDD jargon, tests are note called tests, but specifications or features.
* Tests reports should be understandable for the stakeholders. This way, they can have direct feedback of the status of the project, instad of having the need for the chief architect to explain the test suites.
* BDD is not only an engineering practice, but it needs the team to engage frequently with the stakeholders to build a common understanding of the features.

 #### Advantages

* If a test is failing, then it means that the corresponding feature is broken
* We don't need a very detailed up-front design to start coding, fine-tune our design incrementally using the "clean code" step of the workflow
* Isolate the test from the most technical changes and refactorings, so in the end, it will be better for our codebase quality
* Features are the main thing we need to ensure that are working properly


 #### Disadvantages

* A feature failing doesnt't tell us which component needs to be fixed, need to debug

BDD is an absolute minimum, but unit testing some of the key components can be beneficial. The bigger the system is, the more component unit testing we should write, in addition to the BDD test suite.
# BDD - Unit testing
The notion of units its very generic and does not seem to be very useful to guide the practice of test-first. There  ir a consensus that there exists at least two kind of units:

 #### Features

A feature is a single concrete action that the user can perform on the system, this will change the state of the system and/or make the system perform actions on other third-party systems.

They describe the behavior of the system from the point of view of the user. Slicing a user into features is a key activity of BDD.

 #### Components

A component is any software artifact, such as classes, procedures, or first-order functions, that we use to build the system.

 ### Structure of a test

* __Set up__: Set the state of the system in a well-known state. This implies choosing the correct input parameters, data in the database, or making the third-party systems return a well-knwon response.
* __Act__: Perform the operation we are testing, as a general rule, the act phase of each test should involve only one action.
* __Assert__: Check the return value of the operation and the side effects

---

 ## Test doubles

Unit testing should test the units of our system in an isolated way. By isolated, it means that each test must check each unit in a way independent of the others. If there is a problem with a unit, only the tests for that unit should be failing, not the other ones. In BDD, this means that a problem in a feature should only make the tests fail for that feature.

In component unit testing, it means that a proble mwith a component (a class, for example), should only affect the tests for that class.

However, in practice, this is not enough. Usually, features can be chained together to perform a user workflow, and components can depend on other components to implement a feature. It is usually the case that a feature needs to talk with other systems. This implies thgat the set up phase must manipulat the state of these third-pary systems. It is often unfeasible to do so, because these systems are not udner our control. Furthermore, it can happen that these systems are not really stabel or are shared by other systems apart from us.

In order to solve both the isolation problem and the set up problem, we can use test doubles.

__Test doubles are objects that impersonate the real third-party systems or components__ just for the purpose of testing. There are mainly the following type of test doubles:

We can use __spies in the assertion phase__ of the test and __stubs in the set up phase__, so it is common that a test double is both a spy and a stub.

 #### Fakes

Simplified implementation of the system that we are impersonating. They usually involve writing some simple logic. This logic should never be complex, if not, we will end up reimplementing such third-party systems.

 #### Stubs

Objects that return a predefined value whenever one of its methods is called with a specific set of parameters. You can think of them as a set of hardcoded responses.

 #### Spies

Objects that record their interactions with our unit. This way, we can ask them later what happened during our assertion phase.

 #### Mocks

Self-validiting spies that can be programmed during the set up phase with the expected interaction. If some interaction happens that is not expected, they would fail during the assertion phase.

---

 ## What is a good test

* Should be relevant from the point of view of the product. There is no point in testing. something that, when it is done, does not clearly move the project forward to completion.
* Should be repeatable and offer the same results if there has not been a code change.
* Should be fast, after all, one key point of test-first is rapid feedback and quick iteration.
* Should be isolated. A test should fail only because the feature/component it is testing has a defect.
# ITIL - Information Technology Infrastructure Library
Framework designed to standarize the selection, planning, delivery and maintenance of IT services within a business. The goal is to improve efficiency and achieve predictable service delivery.

ITIL guidelines and best practices align IT department actions and expenses to business needs and changes them as the business grows or shifts direction.

ITIL started in the 1980s, when data centers descentralized and adopted more geographically diverse architectures. This practice caused process and deployment discrepancies and brough inconsistent or suboptimal IT service perfomance into organizations.

 ### Process framework

Five core publications, which are periodically reviewed and updated as technologies changes. Each book collects best practices for each IT service managmente (ITSM) lifecycle.

1. __Service Strategy__: Describes business goals and custome requirements and how to align objetives of both entities.

2. __Service Design__: Outlines practices for the production of IT policies, architectures and documentation.

3. __Service Transition__: Advises on change managmente and release practices, guides admins through environmental interruptions and changes.

4. __Service Operation__: Offers ways to manage IT services on daily, monthly and yearly basis.

5. __Continual Service Improvement__: Covers how to introduce improvements and policy updates within the ITIL process framework.

 ### Guidelines

* 1989 - v1
* 2001 - v2: more uniform and usable structure
* 2007 - v3: feedback loop for improvement, continual service improvement
* 2011 - v3+: expands upon and clarifies processes in ITIL v3
* 2019 - v4: practical guidance, connection with new approaches such as DevOps

 ### Certifications 

* Foundation
* Practitioner
* Intermediate
* Expert
* Master

 ### Benefits

* Better goal alignment between IT departments and the business
* Improved service timelines and customer satisfaction
* Reduced operational costs due to better resource utilization
* Increased visibility of IT costs and assets
* Streamlined service disruption response and management
* More flexible service environment that can easily adapt to change

ITIL also provides good foundation for organizations that don't have any sort of services framework or best practices and enables admins to pursue job specializations.

Admins must be cautions about how management interprets and implements ITIL, however. It is an industry standard, but that doesn't mean it will solve internal personnel or compliance issues. Its implementation guides can make process development easier, but they don't necessarily account for more innovate processes or tecnhologies.

ITIL's implementation requires staff time, training and expertise, so organizations must ensure that they have appropiate resources (and certified employees) before going through an ITIL implemetation.
# Backend - HTTP
Native HTTP protocol ([RFC 2616](https://www.ietf.org/rfc/rfc2616.txt)) defines eight actions, also known as HTTP verbs

* GET
* POST
* PUT
* DELETE
* HEAD
* OPTIONS
* TRACE
* CONNECT
# Backend - REST
* Representational State Transfer
    * Key Principles
    * Goals
* RESTful Routing
    * Shortcomings

 # Representational State Transfer

Back in __1999__, Roy Fielding defined a set of principles built around the HTTP and URI standards that give birth to _REST_.

 ### Key Principles

1. Everything is a resource
2. Each resource is identifiable by a __unique identifier__ (URI)
3. Resources are manipulated via standard HTTP methods
4. Resources can have multiple representations
5. Communicate with resources in a stateless manner

__Resource manipulations operations through HTTP requests should always be considered atomic__. All modifications of a resource should be carried out within an HTTP request in an isolated manner, after which the resource is left in a final state. This implicitly means that __partial resource updates are not supported__, you should always send the complete state of the resource.

Once the service gets deployed on a production environment, it is likely that incoming requests are served by a load balancer, ensuring scalability and high availability. Once exposed via a load balancer, the idea of keeping your application state at server side gets compromised. You should keep it in a RESTful way, for example, keep part of the state within the URI or use HTTP headers to provide additional state-related data such as authentication.

RESTful API's __statelessness__ isolates the caller against changes at the server side. Thus, the caller is not expected to communicate with the same server in consecutive requests. This allows to easily apply changes within the server infrastructure, such as adding or removing nodes.

 ### REST Goals

* __Separation of representation and resource__

Multiple representations are available, it's up to the caller to specify desired media type and up to the server application to handle representation accordingly

* __Visibility__

Every aspect of it should be self-descriptive and follow natural HTTP language

* __Reliability__

Use HTTP safe (GET) and indempotent (GET, PUT, DELETE) in the REST context

* __Scalability and Performance__

You want to serve all your clients in an acceptable amount of time and keep application running, preventing Denial of Service (Dos) caused by a huge amount of incoming request. Stateless is crucial, as scaling your application would require to put a load balancer or bring another instance in your cloud environment.


 ### RESTful Routing

Given a collection of records on a server, there should be a uniform URL and HTTP request method used to utilize that collection of records.

5 Most common usages and __conventions__ for collection:
* Create new object: `POST /<name>`
* Fetch all objects: `GET /<name>`
* Fetch object: `GET /<name>/:id`
* Update object `PUT /<name>/:id`
* Delete object `DELETE /<name>/:id`



---

 #### Shortcomings of RESTful Routing

Once we start working with highly related data, we start running on issues with doing tons of http requests, or very customized endpoints, that are very tightly coupled with very particular features of the frontend.

![example1](https://i.ibb.co/9rf868c/Screen-Shot-2019-12-30-at-22-47-59.png)

You start making tons of endpoints and requests to get a very specific set of the collection...

![example2](https://i.ibb.co/mFzWXbv/Screen-Shot-2019-12-30-at-22-50-19.png)

You end up with very custom endpoints, this becomes very difficult to mantain and ineficient, you may end up 'over serving' data.

![example3](https://i.ibb.co/kmX2QrV/Screen-Shot-2019-12-30-at-22-54-14.png)
# Devops
 #### Before DevOps

Development and Operations are often in conflict with each other. Development wants to see their changes delivered to customer quickly, whereas Operations are interested in stability, which means not changing the production systems too often.

As consequence, Development and Operations often act like silos, being two distinct teams with suboptimal collaboration.

 ## What to Learn

* What DevOps is and how it can result in better and faster delivered software

* Apply patterns to improve collaboration between development and operations

* Unify processes and incentives to support shared goals

* Address pain points in your individual environment with appropiate recipes

* Break down existing walls that create an unnecesarily sluggish delivery process

 #### What is DevOps?

DevOps means to close these gaps by aligning incentives and sharing approaches for process and tools, broaden the usage of Agile practices to operations to foster collaboration and streamline the entire software delivery process in a holistic way.

> The fundamental bases for succesful DevOps are a culture of trust and a feeling of fellowship, thus DevOps centers on the concept of __sharing__, share ideas, issues, goals, processes, tools and goals.

Aligning existing structures and roles with DevOps is a process. Please do not think of DevOps as a new tool for eliminating operatings staff or as a tool suite, rather it's an approach for freeing up time of the current staff to focus on harder problems that can deliver even more business value.

DevOps may bring together subprocesses to form a comprehensive delivery process that enables software to be delivered at high speed and with high quality. However, DevOps does not necesarily introduce new tools. A specific new tool can be used to implement a given process.

 #### What is not DevOps?

DevOps does not allow developers to work in the production system. It is not a "free" process that opens production-relevant aspects to developers. Instead, DevOps is about discipline, conventions, and a defined process that is transparent for all.

Similarly, the opposite is neither true. DevOps does not mean that operations experts take over all development tasks.

> Responsabilities can, and do, shift over thime, and as they shift, so do job descriptions. But no matter how slice it, the same jobs need to be done, and one of those jobs is operations.

DevOps is __not a new department__. Every attemp to establish a DevOps-type department leads to bizarre constructions. Some people believe that "NoOps" is the future.

DevOps is also not a new role profile that will supplant current developers and operations experts.

Some people make the false statement that "DevOps is a catalog of recipes, implement them all, and you are all done". This is false because you will focus on finding the best solution to your individual situation. There is no one-size-fits-all solution and no "Devops by the book" approach that will solve your problems.

Others will claim that "DevOps will lose importance as Cloud solutions gain popularity, PaaS solutions will make DevOps unnecesary". This objection is an interesting one, but the truth is that Cloud solutions introduce another abstraction level and do not supplant operations.


 #### Definition of DevOps

DevOps is a mix of patterns intended to improve collaboration between development and operations. Addresses shared goals and incentives, as well as processes and tools. It respects the fact that companies and projects have specific cultures and that people are more important than processes, which in turn, are more important than tools.

 #### Why DevOps?

DevOps describes practices that streamline the software delivery process, emphazising the learning by streaming feedback from production to development and improving the cycle time.

DevOps will not only empower you to deliver software more quickly, but it will also help you produce higher-quality software that is more aligned with individual requirements and basic conditions.


 #### DevOps Activities

* __Culture__: People over processes and tools. Software is made by and for people.

* __Automation__: Essential to gain quick feedback.

* __Measurement__: Quality and shared (or at least aligned) incentives are critical.

* __Sharing__: Creates a culture where people share ideas and tools.

---

 ## Agile Practices

Agile software development has helped to bring toghether different project roles/experts that comprise cross-functional development teams.

Projects often go through those phases:
1. _Inception_: Project scope is defined and the business case is justified
2. _Elaboration_: Requirements are gathered, risk factors defined, and a system architecture initialized
3. _Construction_: Software is constructed, programmed and tested
4. _Transition_: Software delivered to the user
5. _Operations_: Software available to the user and maintained by operations team

Agile efforts often end at the transition phase from development to operations. The delivery of software is covered by DevOps (i.e lean practices for shipping the software to production and making it available to end users).

DevOps provides patterns to foster collaboation among project stakeholders and user processes, as well as tools to streamline the software delivery process and reduce the overall cycle time.
# DevOps - Traditional team settings
In tradititional team settings, the term _development_ describes the programmers in the team. Testers and QA are often dedicated project roles whose activities start after the programmers have finished their work. _Operations_ contains database, system, network, and other types of administrators who set up and maintain the server and systems. The operations groups essentialy accompanies and accounts for the "last mile" in the delivery process.

In worst case, waterfall-like scenario, programmers code the application that is tested by testers afterward. QA performs down-streamed quality assurance afterward. The walls (in the form of organizational or process borders) between different groups prevent close collaboration.

 ## Attributes

* Hero Cult
* Emphasis on titles
* Shadow responsabilities
* Favor a plan over planning

 #### Hero Cult

> Team is nothing, individuals are kings.

Consider a programmer who fails to document his work adequately and delivers low-quality software that requires adjustments and bug fixes that can only be performed by the hero creator because he did not document or share his knowledge, decisions, and project experience with the team.

 #### Emphasis on Titles

Everyone in the team plays a role. One person is a only a developer and other a senior developer. Often, the primary factor behind a promotion is the duration of the person's membership in the company and not its technical or soft skills.

 #### Shadow responsabilities

People persue other activities that are not part of their responsabilities simply to protect their turf and ensure their influence or to indulge their 'pet projects'.

 #### Favor a plan over planning

Everything is planned, but the activity of planning is seldom performed. Planning (ie, adjusting the original plan) is a rare activity.

 ## Cultural Barriers

* Separate teams
* No common language
* Fear

 #### Separate teams

You'll have separated or loosely coupled working groups. Unfortunally a collection of great teams is not a replacement for one team that pursues a unified and shared project goal.

 #### No common language

Specialized teams and project roles prefer to use the language that is most comfortable for them, instead of a shared language that the whole project understands or even better, one that is also understood by the user and customer. As result, misunderstandings occur.

 #### Fear

What others do is bad, and any activities by other people that could impact one's own type of work or activity are confronted with skepticism. Perciving shared goals and knowledge as risky will lead to fear on all sides, especially fear of losing power, influence, and reputation.
# DevOps - Agile team settings
The Agile movement addressed the pains of suboptimal collaboration and divergent goals.

The "__one team__" approach fosters communication and collaboration by bringing different parties together to form one team that shares the same goals.

The term _developer_ takes a different meaning, as both programmers and testers develop the software. Programmers and testers work together seamlessly and comprise the working group known as developers.

Many projects experience the best results by allowing one team of programmers and testers to work closely together and conduct the whole QA. Everyone in the team performs QA and is responsible for quality.

 #### Different approach

* __Quality__: Testers are not solely responsible for quality, rather, the whole team works together to maintain quality.

* __Development__: Programmers do not code alone, rather, everyone helps them understand what to code.

* __Project roles__: Cross-functional teams are set up and roles decoupled from activities.

If you define work as activities to be accomplished together, you break down role boundaries and allow team members to add value in multiple areas.

For example, you can enable programmers to conduct exploratory tests, and QA leads to work with the application code if they find a fixable bug.

 #### Development and Operations

In Agile approaches, development consists of programmers, testers and QA. Operations often acts or gets treated as a silo.

Agile approaches claim to produce happier participants. However, the operations department is still perceived by some as a strange group of highly specialized server techies in the engine room.

In contrast to developers, the operations team is tasked with the deliverables received from the development team and making software available on production machines such that the software can be used by users. At the same time, operations team often receives nonfunctional requirements (such as target values for the availability of the application). The shipped software (delivered by development team) may conflict with those requirements.

The main task of the development team is to fulfill the customer's requirements, test the solution, and provide software updates in quick succession. New features that have been implemented and tested by the developers add potential value for the customer. On the one hand, the development team wants change. On the other hand, the operations team is mainly interested in reliable and stable software.

 ### Blame Game

 #### Conflicts during Deployment

Conflicts often originate from time pressures. Typically, a new software realese must be deployed quickly. Another scenario that requires operations team to react quickly is when the system is down, and restoring it quickly becomes the highest priority. This situation often leads to a blame game where each side accuses the other of causing the problem.

* Development passes a new release but Operations is unable to get it running on production system
* Operations team contacts the member of the development team to get them to fix the problem, the former describes the errors experienced while trying to bring the release to production
* Development blocks communication and does not offer any help
* Development claims that software ran in test environment without problems, therefore reasons that the operations team is at fault for not bringing the release to life
* Test and production environment may be different in some minor detail and neither party be aware of that

 #### Conflicts after Deployment 

Here is one scenario:
1. Many more users are using new features than expected
2. Response times slow down until software stops responding entirely
3. Escalating the issue leads to finger pointing: development claims is the fault of the database group, the database team blames the network group, and other speculates that the server group is responsible
4. Company begins an objective investigation. By the time the root cause is discovered, users have already been scared away from the new application and company incurs heavy losses in sales and reputation

 #### Conflicts about Performance

* Test environment does not fully mirror Production environment
* Finger pointing...

 ### Operations as Bottleneck

The conflict between development and operations worsened when development began adopting more Agile processes while developing software. During the past few years, iterative models such as Scrum, have become mainstream, but all too often, companies have stopped adding people and activities to the Scrum process at the point when software releases were shipped to production.

The __one team approach__ should also include experts from operations who develop, for instance, scripts or "__infrastructure as code__" to provide solutions to users.

The advantages of Agile processes are often nullified because of the obstacles to collaboration, processes, and tools that are built up in front of operations. As a result, software is released frequently but only in test environments. Consequently, software is rarely brought to the production phase but released frequently in test environments. In other words, not all realeses are produced, and deployment to production often happens after the development team has coded and tested the release. In sum, the cycle time (i.e, the time from the inception of an idea to its delivery to users) is still too long.

High frequency of software releases from development and the incentives for operations leads to what many people in the company will perceive as a bottleneck at operations.

Development may have finished the functionality in fast cycles by using Agile frameworks, but operations may not want or be unable to receive all of the changes in these fine-grained portions.

Development will blame operations for not being able or willing to set the software live. Operations will blame the development team members because of their inability to develop production-ready software.

The root cause of these mismatches can be narrowed down to different goals and suboptimal collaboration between these groups. The underlying cause is also influenced by the horizontal alignment.
# DevOps - To the rescue
DevOps one team approach consist of programmers, testers, QA, and experts from operations. They all develop software and help to bring it to the user.

 ### Values and Goals

* Respect for one another
* Commitment to shared goals
* Collective ownership
* Shared values

Essential to improving collaboration is the alignment of incentives across teams as well as the application of shared processes and tools. This includes a shared definition of quality for the whole project and a commitment to it.

Aligner with defined quality attributes, visibility and transparency can help to foster ollaboration. Incentives must treat the development and operations groups as one team. That is, they should be rewared for developing many changes that are stable and shipped.

As a prerequisite, teams are cross-functinoal. Thus, individual experts share their skills and experiences with others, which leads to a one team approach where individualshave at least a basic understanding of other's domains.

DevOps is about __team play__ and a __collaborative problem-solving approach__. if a service goes down, eeryone must know what procedures to follow to diagnose the problem and get the system up and running again. Additionally, all of the roles and skills necessary to perform these tasks must be available and able to work together well. __Training__ and __effective collaboration__ are critical here.

Because of the changing requirements for team members, DevOps will gain more importance in central companies, such as human relations, which has to hire people who are open-minded and willing to collaborate in a team.

 ### Processes

Processes that define how software is developed and delivered are more imprtant than tools. After developing a process that fits your individual requirements and basic conditions, you can choose the tools that best implement your process.

Processes are even more important when addresing the interactions between different departments. A handover of artifacts for delivery must be defined. It's important to install inderdisciplinary experts in the interface of both development and operations.

We want to accomplish the following:

* Aligning responsabilities with artifacts (deliverables), not with roles (traditional approach)
* Setting up streamlining of holistic process that maintains speed while development hands off software to operations
* Including development and operations in a comprehensive end-to-end delivery processes
* Including operations in Agile frameworks and processes, such as Scrum and Kanban

Development and operations share the same processes, and both groups are focused on delivering application changes to the user at a high frequency and uqality. The __unified process emphasizes the cycle time and prefers the vertical optimization approach__. According to this method, aevery application is created and executed on the architecture that is perfect for this concrete application. The individual components of the infrastructure are laid out to fulfill the requirements for the specific application. Optimization across the borders of individual applications is rare or does not occur at all.

Traditionally, the vertical optimization approach is preferred by development team. In DevOps, both development and operations __prefer workable solutions in production and are open-mined about optimizing vertically__.

 ### Tools

Processes are more important than tools, but tools are stint important, specially for automating activities along the delivery process. The more tools you have in your tool kit, the better you can decide which tool is the best fir for a given task.

Streamlining DevOps is heavy reliant on __end-to-end automation__:

Code and scripts for:
* building
* unit testing
* acceptance testing
* deploying application
* configuration options for different target environments
* programming attributes and "heavior" of target environments

With tools like Puppet or Chef, domain-specific languages (DSL) can be used to describe the attributes of the environment (e.g, technical users, permissions, and installed packages). Code and scripts are stored in version control systems, such as Git.

This approach has many benefits:

* Abstracted descriptions of machines by using DSL while enjoying full power of scripting langauges (in both Puppet and Chef you can describe behavior in Ruby)
* Declarative descriptions of target behavior
* Managment of code in version control
* Synchronization of environments by using version control system and automatic provisioning of environments
* Using tools as Jenkins, Puppet and Vagrant, complete setups, including virtualizations, can be managed automatically
* Sharing scripts (e.g, Puppet manifest). A cross-functional team and all diferent aparties can use those scripts to set up their respective environements

 #### Automation is the backbone of DevOps

> Automation can ensure that the software is built the same way each time, tehat the team sees every change made to the software, and that the software is tested and reviewed in the same way, every day, so that no defects slip through or are introduced through human error.

In software development projects, a high level of automation is a prerequisite for quickly delivering the best quality and for obtaining feedback from stakeholders early and often. Automating aspects of DevOps helps to make parts of the process transparent for the whole team and also helps deploy software to different target environments in the same way.

You can best improve what you measure, and to measure something usefully, you need a process that delivers results in a reproducible way.

 #### Resistance to change

Because of the resistence of different teams to adjust their daily routines when their self-made, isolated solutions have worked just fine, the incentives and commitment provided by upper managmente are important, which are not enough, unified processes and tool chains are also important.

Upper managment will also resist by questinoning the wisdom of implementing DevOps if the concrete benefits are not visible. Better cash flow and improved time to market are hard to measure. managment ask questions that address the core problems of software engineering while ignoring the symptoms, how can the company achieve maximal earnings in a short period of time? How can requirements be made stable and delivered to customers quickly? These results and visions should be measured with metrics that are shared by development and operations. Existing metrics can be further used or replaced by metrics that accurately express business value.

# Devops - Building Blocks
* Measurements and Metrics
* Improving Flow of Features
* Improve and accelerate delivery
* Automation

 ## Measurement and Metrics

Crucial aspect of software engineering is __measuring what you are doing__. Sooner or later, you'll have to decide on which metrics you want to use during your software engineering process, consider which metric is meaningful enough to aid all participants, as well as the development and delivery processes.

Traditional projects emphasize measurement as an important tool for tracking progress, indentifying the current status, and scheduling dates.

Agile projects settings try to find different approaches to create measurements, but often find themselves on dead-end streets when trying to bridge operations to development.

Both traiditional and agile projects often emphasize the importance of measurement because __you can only improve if you measure__.

 ## Traiditonal approach of metrics

Often driven by numbers. Classic metrics such as static code analysis or test coverage, may continuously draw the attention of the whole team without returning benefits in the same degree. It is simply too easy to fake metrics or to adapt the process to obey the metrics instead of improving the process itself.

 ## Agile approach of metrics

Agile development methods require a disciplined approach to ensure that customer feedback, continous testing, and iterative development actually lead to frequent deliveries of working, valuable software.

Agile teams often view metrics as a __onetime pointer instead of a continuous measurement__. The pointer makes the current state of the software's internal quality visible. It is then up to the team to decide what and when to adjust, or whether to do so at all. These pointers provide indicators that there's something worth investigating, but they don't provide the context and understanding needed to make critical decisions.

 #### Definition of Done (DoD)

Before the job is started, a definition of a completed job is specified, and the team commits to this definition. DoD often states that no development job is finished until testing is complete or the software is shipped to target systems, in a defined quality.

By using DoD, the whole team shares the same understanding of when the task is completed.

 #### Broken Agile Metrics

* __Test pass/fail ratios__: Agile team stops the line and immediately fixes a broken test. Those ratios are not usefull because team stops and directly fixes the regression. However, the metric is usefulf for detecting basic flaws. For example, is test coverage is below 20 percent, it is pretty obvious that technical debt has been accumulated.
* __Number of defects created/resolved__: Instead of helping the project move forward, these numbers often result in finger pointing and arguin about what what was and wasn't a bug or a feature.
* __Continuous Deployments__: Build jobs are often broken, and packaged applications frequently cannot be deployed to a target system. Obviously, there is a gap between what the application expects of the target environment and the current state of the environment.
 #### Qualify Changes

Agile teams often use a general unit called "__change__" to track progress.

As soon as a change is applied to the system, it may lead to a problem that may take significant amount of time to notice and identify its root cause.

---

 ## Improving Flow of Features

DevOps is essentialy about gaining fast feedback and decreasing the risk of releases through a holistic approach that is meaningful for both development and operations.

One major step for achieving this approach is to improve the flow of features from their inception to their availability. This process can be refined to the point that it becomes important to reduce __batch size__ (size of one package of changes or the amount of work that is done before a new version is shipped) without changing capacity or demand.

 #### Cycle Time

Period required to complete one cycle of an operation or process. Cycle time required to process a customer order might start with the customer's phone call and end with the order being shipped. In software engineering, cycle time describes the __amount of time required from the start of the development process to the beginning of the revenue generation__.

The overall process comprises many different steps. The cumulative cycle time of all of the subprocesses in your operation determines when you can promise a delivered feature to your customer.

Cycle time is __only meaningful if you define "done"__ as the point at which features have been developed, tested, and shipped to the customer, who can then begin to using them.

If you declare victory as soon as the product ships, there is likely to be insufficient attention devoted to the residual engineering that must be performed to finish optimizing the product for production. Insisting that all of this optimization takes place before shipping the first unit is usually a bad economic choice, albeit a common mistake.

> The key point is to agree on a measurable starting and ending point.

 #### Lead Time

The term _lead time_ can be used in addition to cycle time. It can refer the amount of time between an input for a request to the system and the completion of that order. Typically includes queuing time and work order preparation time.

 ## Improve and Accelerate Delivery

After a release engineering team spends a weekend in a data center deploying the past three months' of work, the last thing anybody wants to do is deploy again anytime soon. If a task is painful, the solution is to do it more often and bring the pain forward.

Choosing small releases over big releases eventually delivers the same amount of functionality, but more functionality is delviered more quickly, and software will return value more quickly also.

Deploying to production frequently will help keep things simple and make the individual changes more focused. The risk of deployments is reduced because you practice the process of deployments. By bringing the pain forward, you'll identify problems in your process and tool chains earlier and will be able to optimize accordingly. As a result, the deployment itself will also only change in smaller batches between different deployments. The process of fixing incidents will also become optimized too, as changes between deployments are small, and in turn helps with learning about the root causes of production incidents, errors can be fixed faster, and that makes a total rollback unnecesary, but even if you have to rollback, you only need to do so back a small set of changes. This is not only a technical issue but also more managable from a business viewpoint to roll back a single feature than a full release with hundred of features.

 ## Automation

Automating common tasks in building, testing, and releasing software helps to increase efficiency and set up a reproducible process that can be implemented by tool chains. We can even automate the provisioning and deployment of the virtual machines and middleware. This ensures repeatibility.

> Automating the integrating, build, packaging, and deployment steps will facilitate rapid iterative development.

> Automating the most error-prone, most repetitive, and most time-consuming activities is essential

 ### Automation good practices

Do not automate simply because you want to automate. __It's bad if your automation activities are driven by technical instead of business considerations__. Automation is performed to gain fast feedback. Efficient automation __makes humans more important__ not less. Always be aware of the consequences of automation, including the law of marginal costs and the paradox of automation.

 ### Pitfalls of automation

* Law of marginal costs
* Verb/noun mistake
* Paradox of automation
* Irony of automation

 #### Law of marginal costs

In most cases you should not automate everything. Software development needs maintenance, and enchancements are coded continuously. The same is for the automation system itself.
If something has to change in the running automation system because new requirements have emerged or changes are being implemented, these activies will cost time and thus money.

 #### Verb/Noun Mistake

Project activities are often mixed up with sense and stateless deliverables. You will most probably not want to automate 100 percent of your tests just to have a big batch of test cases. Moreover, a crucial part of tests cannot be automated at all (i.e exploratory testing of user interfaces).

 #### Paradox of automation

> The more efficient the automated system is, the more essential the human contribution that is needed to run the automation system.

Humans are less involved in heavily automated systems, but their involvement becomes more critical.

If an automated system has an error, the full system is often completely unavailable until the error is identified and fixed. Finding the error is a nontrivial task that cannot be performed by a novice engineer who is not an expert at the underyling, automated baby steps. Strong skills and experience is needed to monitor and operate a running system, and to maintain and develop the system further because requirements will change and new requirements will be raised in the future.

 #### Irony of automation

The more reliable the plant, the less oportunity there will be for the operator to practice direct intervention, and the more difficult will be the demands of the remainint tasks requiring operator intervention.

According to __Ashwin Parameswaran__, running most scenarios via "autopilot" with a high automation grade results in a deskilled and novice human operator who cannot fix the system if fails.

Quote from his "__People make poor monitors for computers":

> Because a failure is inevitably taken as evidence of human failure, the system is automated even further, and more safeguards and redundancies are built into the system. This increased automation exacerbates the absense of feedback if a small error occurs. The buildup of latent errors again increases, and failures becomes even more catasthropic.

As a possible consequence from accidents in highly automated systems, you may claim that __only error situation itself provides a situation you can learn from to improve and do better__. But as soon as the incident arises, it may be too late to adjust accordingly.

The operator needs to gain and preserve a better understanding not only about the whole automated system, but also about the single modules and facets that are not part of it. This results in the operator becoming what he or she should be, an expert, not a monitor for a computer.
# Devops - Decoupled Deployment and release
Decoupling deployment and release improves and accelerates delivery, which is one building block of devops.

* Branch by Abstraction
* Feature Toggles
* Dark Launching
* Blue-Green deployment

 ### Branch by Abstraction

Incrementally makes large-scale changes to your system. The strategy was initially introduced by __Paul Hammant__.

Main steps:
1. Create an abstraction over the part of the system that you need to change
2. Refactor the rest of the system to use the abstraction layer
3. Contiune coding, the abstraction layer delegates to the old or new code as required
4. Remove the old implementaion
5. Iterate over steps 3 and 4. Ship your system in the meantime.
6. Once the old implementation has been totally replaced, remove the abstraction layer.

 ### Feature Toggles

Deliver complete code to production but use data-driven switches to decide which feature is made available during runtime. To enable this, configuration files are often used.

The team can develop in the same development mainline (without the need for using branches) and ship the complete code to production.

Feature toggles can help to degrade your service gracefully under load. This ability to restore your system to a baseline is vital not just when a deployment goes wrong but also as part of your disaster recovery strategy.

The advantage of feature toggles is a disadvantage too: altough fading out features in production, the production code does contain parts that are not relevant for that specific release. This non-relevant code may influence other code parts or even provoke errors. Additionally, fading out features on the user interface may easily be possible, but it may not be possible to fade out corresponding functionality in the backend of application.

 ### Dark Launching

Strategy of deploying first versions of functionality into production before releasing the functionality to all users. This decouples the deployment of a new version of software from the release of the features within it. You can deploy new versions of the software continuosly, regardless of which features are available to which users.

With first versions in production made available for a subset of end users only, you can find any bugs more easily, before you make the release available to all users.

Dark launching provides an approach to remediate in a low-risk way. If a problem occurs with an early version of a feature, only a few users may experience the problem. Additionally, you can address the incident without a complete heavyweight rollback, just by switching off the feature or by changing a router setting.

 ### Blue-Green deployment

Deploy new version of the application side by side with the old version. To switch over to the new version or roll back to the old version, back and forth, we only need to change a load balancer or route setting.

Blue-Green deployment ensures that you have two production environments that are as similar as possible. At any one time, one of them (i.e. the green deployment) is live. Whiling brining a new release of your software to production, you conduct the final steps of testing in the blue deployment. Once the software is working in the blue enviornment as expected, configurations are done, and smoke tests are run successfully, we switch the router to redirect all incoming requests to the blue environment. Afterward, the green environment is out of production and can be used to prepare the next release.

# Devops - Quality and Testing
 ## What is Quality?

The definition of quality is unique to a given context.

> Gerald M Weinberg: quality is conforming to someone's requirements

Traditional attributes:
* Expansive test coverage of unit tests
* Small number of entries in the bug tracker
* Small number of entries in the bug tracker given a specific priority of ranking entries
* Minimization of accidental complexity
* Compliance with defined metrics checked with static source code analyzers such as PMD or FindBugs
* Compliance with system runtime quality, including functionality, performance, security, availability, resilience, usability, and interoperability.
* Compliance with system non-runtime quality, including modifiability, portability, reusability and testability.
* Excelent stability and capacity of the software

More subtle such as follow:
* A good business quality, including costs, schedule, marketability, and appropiateness for the organization
* A good overall cycle time.

 #### Capacity

The maximum throughput a system can sustain for a given workload while maintaining an acceptable response time for each individual transaction.

 #### Resilience

Intrisic ability of a system to adjust its functioning prior to, during, or following changes and disturbances, so that it can sustain required operations under both expected and unexpected conditions.

 ## Leading and Supporting Attributes

For the DevOps approach, we are more interested in comprehensive, objective, measurable values that are meaningful for both development and operations (__leading attributes__), so that they can integrate and align themselves with these leading quality attributes. These attributes are vehicles for better cooperation and shared goals.

Support attributes can be helpful in specific contexts as well, altough attributes such as "number of entries in the bug tracker" are not meaningful and can be manipulated easily.

 #### Measurable Attributes

To know wether a specific quality has been achieved, it has to be measured. As soon as you have a measured value, you can benchmark it and try to improve it.

 #### Reliability on Context

Quality heavily relies on context and interdependency of quality attributes. Decisions directly impact quality, and a decision in favor of one quality often impacts another.

Quality must be set in context, and often, the solution is a compromise and a matter of prioritizing the different quality attributes.

Dedicated teams (such as development and operations) may have different priorities for quality attributes or may not want to deal with attributes from other groups. Thus, to obtain the best overall solution, teams must define quality in a holistic way. Leading attributes are the best candidates for a well-rounded definition of quality because they feature a holistic macrofocus rather than a microfocus.


 #### Internal Quality

Quality of the design and the code. Can be improved by applgying good design and coding practices, and a sustainable development and delivery process.

 #### External Quality

Measured by what you see while using the application. Even if the external quality is great (all functions are available), the internal quality ay be very bad (bad code and code that is not maintainable).

In the ase of poor internal quality, external quality __will suffer__ eventually because the application will raise an increasing number of bugs. Additionally, __development time will increase__ because of the increased technical debt.

 #### Quality is an Inherent Part

Quality in software engineering is important at all times, from the very beginning until the application is running and is maintained in production. __Quality can't be injected into the application post mortem__. Additionally, it's not sufficient to improve on a local scope, or to expect any great quality improvements by microtunning individual software units.

> Quality comes not from inspection, but from improvement of the production process

 ## Degeneration: Faults and Failures

Degenerations happens, for example, if too many versions are pushed to production, with the application having suboptimal internal quality, and many more upcoming requirements should be implemented in the software.

Other worse-case scenarios include automation that is not tested and packing and deploying the software to production when it is error-prone, monitoring is not in place, or nonfunctional requirements were not implemented accordingly. 

High speed releasing, together with high portion of technical debt, leads to degeneration, which has consequences. In particular, degeneration of quality at the beginning of the process negativelry affects the entire process, with self-reinforcing results (i.e. degeneration of qualtiy will probably lead to more degeneration of quality). It will not work to inject quality into the software post mortem.

> Weinberg, "A fault is the defect in the program that, when executed under particular conditions, causes a failure".

> Weinberg, "A failure is the departure of the external results of a program operation from requirement".

Obviously, inherent quality will decrease the amount of faults by identifying, isolating, and addressing defects early and keeping the internal quality up, and so, the impact of faults, meaning the failures.

Because quality attributes must be taken care from the start, you have to address the challenge of dealing with quality that is traditionally detected or important for project roles in the later steps of the delivery chain. For example, altough the stability of an application may be crucial for operations, that stability must be built into the application during the prior development phase. Quality attributes must be an inherent part of the software development and delivery process from the beginning.

---

 ## Patterns for improving quality

* Use Scenarios to describe Quality
* QA and making Quality Visible (CI)
* Test Automation Mix
* Acceptance Criteria
* Inject Quality Gates

 #### Scenarios to describe Quality

Describe quality attributes in terms of scenarios such as the following:

> if ten users initiate logout actions, the logout component will process the requests with an average latency of one second under normal circumstances.

This scenario allows the team to make quantifiable arguments about a system. 

In DevOps, it is important to identify connections and see implications for the whole system. Scenarios are useful for managing a given complex structure with its connections to other scturtures. For example, if a developer changes a core part of the client-server connection of an application, this must be tested thoroughly on target systems, not only by the developer but also by operations.

A Scenario description consists of a source of stimulus (e.g., users), the actual stimulus (e.g., initiated transaction), the artifact affected (e.g., logout component), the environment in which it exists (e.g., normal operation), the effect of the action (e.g., transaction processed), and the response measure (e.g., within one second).

Writing such detailed statements is only possible if the relevant requirements have been identified and an idea of the components has been proposed. 

 #### QA and making Quality Visible (CI)

QA is performed by the whole team, including development and operations. You can ensure the quality of an application only if you have control over that application, that means, the authority to change the application.

Real and holistic QA can only be done if you can change the solution (with its parts, application, middleware, and infrastructure), thus, bringing together development and operations.

With DevOps, instead of being an explicit downstream activity, QA is done at any time and by the whole team.

Quality is made visible by appliying __continuous integration__ and __continuous delivery__.

Continuous integration is, in short, a shared agreement in the team that when the team gets the latest code from the code repository it will always build successfully and pass all tests, with the prerequisite that the team checks in their code every few hours

Continuous Delivery is, in short, continuously stage software through a delivery pipeline, from development to production.

A crucial observation is that quality gains further momentum the closer we get to production (operations). The main reason for this is that it is often not the software you bring to production that you _wish_ to bring to pruduction. What you bring to production is the _real_ software with its actual quality. There might be big differences between the wish and the reality, or in other words, between the result of concepts and versions of the software in the development, and the result of the same software running on real production machines.

Deployment and running in production closes the __definition of done__. Having the software in production is the moment when you see that you've done your work accurately. There is no replacemente for software running in production from both perspectives, gaining business value and gaining meaningful (technical) insight about the quality.

 #### Test Automation Mix

Flaws and bugs should be detected as soon as possible. Automated tests provide __fast and continuous feedback__ on the state and quality of the software. Automated tests provide a safety net required to add new features and incorporate bug fixes without breaking existing features. The whole team is responsible for test automation.

Altough is crucial to use automated tests, not all tests can be automated, e.g. usability tests, exploratory tests, or one-off tests.

The test automation mix includes:
* unit tests
* service tests
* UI tests

![Test pyramid](https://i.ibb.co/Bc0QswZ/Screen-Shot-2019-11-28-at-18-36-55.png)

Practices such as TDD (Test-driven development) recommend writing tests first and writing functional and test ode in small interations along with refactorings to improve the code designe.

A broad selection of unit tests is __essential for fast feedback cycles__ and to improve the quality of the code, particularly its design.

A common error in test strategy is to not start with the fundament of the pyramid. A common antipattern skips unit tests and even service tests and only sets up and runs UI tests. As a result of overemphazising automatic UI tests, the following problems emerge:

* Gaining feedbak takes too much time, especially for bug fixes
* Isolating bugs becomes more difficult
* Inner quality of whole application will suffer because units are not covered by tests
* Design suffers because other tests help to improve the design

 #### Acceptance Criteria 

Include good acceptance criteria to your product backlog items. This defines when you're done (definition of done).

> The backlog is an ordered list of everything that might be needed in the product and is the single source of requirements for any changes to be made to the product

Test aspects are crucial parts of your backlog. You should always try to ensure testable stories by defining a test case. You should also estimate testing efforts when estimating a user story for your backlog.

 #### Inject Quality Gates

Check if quality is accurate. With Scrum, strategies include the definition of and alignment with the definition of done, or the demostration of the iteration result after the iteration is completed.

Altough QA should be done by the whole team at any time in development, having quality gates can be of value.

Quality gate __is a milestone during delivery__ where special quality requirements are checked. If the requirements are fulfilled, the software may be staged further into the direction of production until it is in production and available for the users.

Optimally, quality gates can fail automatically to maximize the flow and minimize cumbersome, manual activities. However, there are different contexts. Some projects obtain good results by not introducing quality gates, if any type of quality gate is a potential ottleneck that prevents features from being delivered to the customer.

Typicale use cases for quality gates:

* Continuous Build fails if checked-in code provokes test failures
* Continuous Build fails if the test coverage of new code fails to meet coverage goals
* Continuous Build fails if Checkstyle, PMD, etc (static code analyzers) detects a design or code flow with severe 'errors'
* QA build fails if automatic acceptance tests fail
* Release build fails if application still depends on components that in turn are still under development
* Rollout to production fails if BDD tests fail to check behavior of infrastructure
* Any further rollout is stopped if check-ins to infrastructure code provoke build errors
# DevOps - Shared incentives
Evolve a team from a working group. Goals, working agreements, and motivation are essential for creating shared incentives.

* Goals
* Working agreements
* Motivation

 #### What is a Team?

A team is a working group in which __members work together closely, cooperatively, and interdependently to achieve a shared group goal__. Besides the goal, the team has agreed on an approach to the work (e.g., by saring the _definiton of done_) and consensus culture at work.

Often the team has complementary skills. This means that every role has equal value, and the sum of all roles forms the team in which anyone can pick up tasks. Teams are not too big (up to ten members at most). The optimal size of a team depends on the complexity of the task to be accomplished. Too many members complicates team building and increases misunderstandings and the amount of communication pairs.

Teams forms communities and are ecosystems. Altough having personal goals and personal knowledge, on teams, people pull approximately in the same direction.

In order to become a team, it is essential for the group to __share goals and commit to working agreements__.

 #### Goals

> When people have a common goal, make commitments to each other about their interdependent tasks, and use an agreed-upon approach to the work, they are part of a team.

A __goal__ is a desired result the team plans and commits to achieve. Every team member has individual goals that must be aligned with the overall goal of the whole team.

> Goals have to be real and easily recognizable as valuable

> Tom DeMarco, "Getting the system built was an arbitrary goal, but the team had accepted it. It was what they had formed around. From the time of jelling, the team itself had been the real focus for their energies. they were in it for joint success, the pleasure of achieving the goal, and any goal, together."

 #### Working agreements

Setting up concepts, particularly requirements documents, is essential for fostering agreement. __Working agreements__ guide daily work of the team:

* Explicit set of agreements about how a team functions provides clarity that prevents confusion and conflict later.

* Team function together in many ways and every time does it differently. You can only assume that everyone shares the same understandings if you have discussed and doccumented them.

* Working agreements help new memebers learn how to participate constructively. They serve as the basic list of key dos and don'ts.

* In meetings, explicit working agreements help members stay accountable, because if they violate an agreement, any other memeber can point out what they agreed to.

Examples of team-related working agreements:

* __Moving forward__: any member may ask for a test for agreement at any time
* __Wise use of meeting time__: Stick to one conversation at a time in meetings
* __Decisions__: First decide how you will decide (voting, consensus, command, delegation)
* __Feedback__: Seek and offer feedback on the impact of actions and interactions
* __Time__: When team meetings are set, make an effort to attend, be on time, come prepared
* __Learning__: Fail fast, fail often, identify mistakes early
* __Knowledge transfer__: Developers pair with members of operations and viceversa
* __Collective ownership__: Ask for help when stuck on a task

 #### Motivation

Inner driver that pushes toward performing actions. For motivation, it is important to have goals. Achieving those goals is important for further motivation, so it may be a good idea to make those goals manageable and achievable in order to be able to finish what you've started.

Values are important for motivation too, such as respect, trust, opennes, focus, courage, commitment, and simplicity.

Work factors that stimulate people's behavior include challenging work, achievement, personal growth, best-of-breed processes and tools, recognition, responsibilities, job satisfaction, team work, success, and creative environments.

Mary and Top Poppendieck state that the __building blocks of motivation are__:

* __Belonging__: Team wins or loses as a group
* __Safety__: No zero defects mentality, rather an atmosphere that tolerates mistakes
* __Competence__: People want to be involved in something they believe will work
* __Progress__: When a team meets an important objective, it's time for a celebration

---

 ## Becoming a Team

1. Define foundations: determine shared goals
2. Define scope as well as boundaries and context
3. Define quick wins, a result that can be achieved quickly and is appreciated by all
4. Define the path to solution, how you want to come up with shared goals (e.g, brainstorming)
5. Define the steps: rearrange and plan next steps to foster shared goals
6. Define slack time in order to improve your daily work, team collaboration and definitions of shared goals. Slack time enables thinking and analyzing the current working approach
7. Inspect and interate

It's essential to include both development and operations, and focus on __sharing__:

* Celebrate success together
* Acknowledge the work of others
* Apply shared practices and tools across departments
* Ask questions and give feedback and interactions, to show interest, to learn, and to foster shared understanding
* Emphasize visibility

Additionally, you need __commitment__ from both the management and the team. Managment should commit to:

* Allow self-direction
* Provide right motivation (e.g., removing micromanagmenet)
* Provide slack time
* Enable team to do its job successfully (providing and allowing good practices and tools)
* Foster training and collaboration by rotating roles, and emphasize general communication strategies
* Accept impacts of physical logistics

 #### Tuckman's Stages of Group Development

In 1965 Bruce Tuckman introduced a model for group development. According to the model, the team must go through all four stages to react a state that enables it to perform.

1. __Forming stage__: Individual's behavior is driven by a desire to be accepted by the others, to explore, and to avoid conflict.
2. __Storming stage__: Members with different ideas compete for consideration. Team tries to find out how they function independently and together and what leadership model they will accept. Team members open up to one another and confront one another's ideas and perspectives. Some team members will focus on minutiae to evade real issues. This stage is necessary to the growth of the team.
3. __Norming stage__: if it manages to have one goal and comes to a mutual plan. Some may have to give up their own ideas and agree with others in order to make the team function. In this stage, all team members take the responsability and have the ambition to work for the success of the team's goals. Some groups never pass this stage.
4. __Performing stage__: High-performing teams are able to function as a unit as the team members find ways to get the job done smoothly and effectively without inappropriate conflict or the need for external supervision. By this time, they are motivated and knowledgeable. Team members are now competent, autonomous, and able to handle the decision-making process without supervision. Dissent is expected and allowed as long as it is channeled through means acceptable to the team.

Any time the team is changed (e.g., new members are added), the group may have to start again with the forming stage. If you enter a team in the storming phase, you may be skeptical about the team's behavior or you may even doubt that this is or will be a team. Facilitators and caretakers can be helpful for team building.

 #### Facilitators and Caretakers

Altough working groups cannot be forced to act as teams, there are many possible ways to introduce and help the team to form itself.

One way is to install a __facilitator__ who helps the team to understand and achieve its goals and assits during the daily work. A special form of a facilitator would be a Scrum master, which is a caretaker who maintains the process and enables the team to do its work. Another form of caretaker is the _gatekeeper_. 

It's also important to find and install a human facilitator for pushing DevOps.

Mary Lynn Manns and Linda Rising provides patterns:

* __Local Sponsor__: Find a first-line manager to support the new idea, ideally, your boss, ask for support from first-line managment to introduce your ideas
* __Dedicated champion__: Introducing a new idea into an organization is too much work for a volunteer, make a case for having the work part of the job description
* __Corporate angel__: To help align the innovation with the goals of the organization, get support from a high-level executive
* __Evangelist__: To begin introduce a new idea into the organization, do everything you can to share your passion for it
# DevOps - Kanban

Kanban method does not prescribe a specific set of roles or process steps. Starts with the roles and processes you have and stimulate __continuous, incremental, and evolutionary changes__ to your system.

The organization (or team) must agree that __continuous, incremental, and evolutionary__ change is the way to make system improvements and make them stick. Sweeping changes may seem more effective, but more often than not, they fail because of resistance and fear in the organization.

The current organization likely has some elements that work acceptabl and are worth preserving.

Kanban is __influenced by the Theory of Constraints (TOC)__. The base of TOC is the idiom that a chain is no stronger than its weakest link. The idiom is transported to management and software engineering. The weakest items in the overall chain can cause failure or adversely affect the outcome.

In Kanban, stations receive a "_pull_" from the demand. Therefore, the supply is determined according to the actual demand, not according to some theoretical, forecasted, or even academic target demand.
# DevOps - Area Matrix
* _Area 1: Extend development to operations_: development and operations collaborate on anything that is related to delivering the project outcome to production.

* _Area 2: Extend operations to development_: This area focuses on collaboration in the sense of streaming information from operations back to development.

* _Area 3: Embed development into operations_: This area focuses on development's involvement in items that are originally located in produiction (or are under the responsability of operations)

* _Area 4: Embed operations into development_: Last area deals with the operations deprtament's involvement in the development process in a holistic way.

![Areas](https://i.ibb.co/nQmTsCG/Screen-Shot-2019-11-29-at-10-28-42.png)

 #### 1 - Extend Development to Operations

__Practice__: Use tools like Puppet to provision environments from versioned code

__Goal__:
* Fast feedback through automation
* Reuse of code and tools
* Reliability of delivery process and provisioning

Compromises actions to interpret software development in a more holistic way by applying production-relevant items early and often as part of the development process (with continuous and thorough collaboration with operations).

A typical practice of this are uses processes and tools for provisioning infrastructure. This infrastructure code can be managed the same way that application code is managed. The goal of this approach is to __avoid manually provisioning infrastructure__. Instead, with DevOps, environments canbe provisioned automatically.

Infrastructure artifacts are also part of a software release and thus have to be put to a baseline. As a software release, they should be put in version control. Doing so not only fosters fast feedback through automation and the reuse of code and tools but also improves reliability of the delivery process.

 #### 2 - Extend Operations to Development

__Practice__:  Provide monitoring and log files to development

__Goal__:
* Share information about state in production
* Enable development to improve
* Enable development to trace production incidents

Similar to Area 1, but here, convergence starts from operations. In this area, development often does not have any insight about an application's behavior once the application is deployed to a target system.

Operations has the __information about runtime behavior__. Without streaming information back to development, an opportunity for development to learn and improve is missed.

With DevOps, monitoring is provided to and integrated with development.

Part of this area, log files are often rotated to a shared file system where development can examine past files. This function is particularly important if development has to fix bugs that were detected in a running system. It's an impractical and mostly forbidden solution to allow developers to scan log files in production (accesing remote systems with their dedicated accounts and protocols). Streaming log files continuously to development is very practical.

 #### 3 - Embed Development into Operations

__Practice__: Set stability and capacity as development goals

__Goal__: Align goals, share incentives

Shapes processes across development and operations by embedding development (not only the team but also its activities and goals) into operations.

If development neglects nonfunctional requirements because its primary goal is to deliver new features, the overall solution will be suboptimal.

Setting nonfunctional requirements (e.g., stability and capacity) as goals for the development team will bridge the gap between development and operations.


 #### 4 - Embed Operations Into Development

__Practice__: Operations gives feedback about the design of the application that is under development, early and often

__Goal__:
* Development gains feedback about feasibility
* Share knowledge


Operations team is part of the development team. Both teams work closely together to provide the best solution possible. The operations team consults and gives feedback about the solution under development. The goal is to enable the development team to gain fast feedback about thre feasiblity and to share knowledge across teams early and often.

A common practice for this area shapes nonfunctional requirements in the development process. It's hardly possible or costs too much money to implement nonfunctional requirements ex post (i.e., after the software is designed, coded and sent to production).

Consider the development opf the NASA space shuttle. Tomakyo writes, "_In the late 1970's, NASA relaized that more powerful computers were needed as the transition was made from development to operations_". This type of scaling software is pretty bad, especially if its necessity is detected too late.
<<<<<<< HEAD
# DevOps - Kanban
Kanban method starts with the roles and processes you have and stimulates continuous, incremental and evolutionary changes to your system.

The organization (or team) must agree that this is the way to make system improvements and make them stick. Sweeping changes may seem more effective, but more often than not, they fail because resistance and fear.

The current organization likely has some elements that work acceptably and are worth preserving.

Kanban is __influenced by TOC (Theory of constraints)__. The base of TOC is the idiom that a chain is no stronger than its weakest link. The idiom is transported to managment and software engineering. The weakest element in the overall chain can cause failure or adversely affect the outcome.

In Kanban, stations receive a "_pull_" from the demand. Therefore the supply is determined according to the actual demand, not according to some theoretical, forecasted or even academic target demand.

![Kanban Board](https://i.ibb.co/4gfw1RY/Screen-Shot-2019-11-30-at-20-08-36.png)

 ## Five Core Principles

* Visualize the Workflow
* Limit WIP
* Manage Flow
* Make Process Policies Explicit
* Improve Collaboratively

 #### Visualize the Workflow

Visualizing the flow of work and making it visible are core to understanding how work proceeds. Without understanding the workflow, making the right changes is harder.

A common way to visualize the workflow is to use a card wall.

 #### Limit WIP

Limiting work in progess implies that a pull system is implemented in parts or all of the workflow.

The pull system will act as one of the main stimulus for continuous, incremental, and evolutionary changes to your system.

The critical elements are that the WIP at each state in the workflow is limited, and the new work is 'pulled' into the new information discovery activity if there is available capacity within the local WIP limit.

 #### Manage Flow

Flow of work through each state in the workflow should be monitored, measured, and reported. By actively managing the flow, one can evaluate whether the changes to the system have positive or negative effects.

 #### Make Process Policies Explicit

Until the mechanism of a process is made explicit, it is often hard or impossible to hold a discussion about improving it.

Without a explicit understanding of how things work and how work is actually done, any discussion of problems tend to be emotional, anecdotal, and subjective.

 #### Improve Collaboratively

If a team have a shared understanding of theories about work, workflow, process and risk, they are more likely to be able to build a shared comprehension of a problem and suggest improvement actions that can be agreed upon by consensus.
# DevOps - Unified and Holistic Approach
> DevOps Borat: "You can only call yourself senior programmer if you spend more minutes in meeting as in writing code".

With DevOps, development and operations do emancipate themselves and accept responsabilities of management, particularly planning and coordination. We need a holistic, unified approach for creating traceable artifacts, spanning all roles, particularly development and operations.

 ## Unified Approach 

Enables development and operations to create _concepts_ collaboratively. This minimizes conceptual deficits and detects the first stages of those deficits early.

* Foster Traceability
* Check nonfunctional requirements
* Align Goals

 #### Foster Traceability

Concept creation is a complex, distributed, and iterative process, and deficits can occur on all levels in the concept creation process.

To enable good understanding, project teams need traceability. It becomes elementary to line up and illustrate the steps as single phases, from the idea to concrete requirements to implementing and operations of software, and also to examine the transition in between.

The software solution is a product of a sequence of decisions, thus these decisions should be documented where they have been made. A prerequisite for traceability is that requirements are well documented.

Linking conceptual artifacts provide feedback, foster traceability, and improve quality.

![Linking artifacts](https://i.ibb.co/hL6Jc3j/Screen-Shot-2019-12-01-at-00-34-49.png) 

 #### Check nonfunctional requirements

A prerequisite is that the software must be testable. It is important to take care of nonfunctional requirements from the beginning of the development process. In most cases it's not possible (or really expensive) to implement nonfunctional requirements post mortem.

If the software is testable, you can write tests for both functional and nonfunctional requirements.

Another approach to check nonfunctional requirements is to link the requirement to artifacts where design decisions are made and documented. A typical example is to logically link the requirement to architecture documents or to software models.

 #### Align Goals

Sometimes, management is not aligned with the same goals of the company overall, which can result in subversive department behavior or individual activities driven by hidden agenda.

Unfortunately, management defines the requirementes and hence can sweep a lot of dirt under the carpet. Adittionaly, if there are suspicions, the problem is often declared to be a mere technical problem until it is undeniably proven to be a conceptual deficit of other departments.

This problem exists because the causality between effects and conceptual deficit is not easy to explain to C-level management and cannot be quickly retrieved.

Creating concepts, particularly writing requirements, is an important area in which the teams of development and operations need to make agreements. Writing requirements documentation is done to guide future actions in developing the solution.

> Much of the requirements work will be negated if choices, impositions and assumptions are not both understand and accepted by everyone involved.

Thus, before moving out from the requirements phase into the rest of the process, all parties must understand and accept their responsabilities. To ensure understanding and acceptance, you must attemp to make every choice, imposition and assumption into explicit documented agreements.

---

 ## Concepts

A concept is a __plan to achieve additional business value__. A concept should give answer to the question of what should be done by whom and how to gain promised buiness value.

The concept consists of __processes and workflows that have to be defined in a consistent and complete way__. By that definition, a clear and explicit understanding is shaped, which is a prerequisite of automating processes.

To define concepts, artifacts are created, such as requirements documents.

 ### Nonfunctional Requirements

Those are special interest for operations because they __specify runtime behavior__ of the software.

For grouping types of requirements, we will use FURPS:

* _Functionality_: What system does for the user
* _Usability_: How easy is for a user to get the system to do it
* _Reliability_: Availability and MTTR (Mean time to repair)
* _Performance_: Capacity (number of transactions the system can accommodate) and Scalabity (ability of the system to be extended to accomodate more interactions)
* _Supportability_: How easy it is for us to maintain and extend the system.

Nonfunctonal requirements are often __defined by using a user voice form__, e.g. "As a consumer, I want to be notified of any messages from the utility in less that one minute of arrival so that I can take appropiate action quickly". Acceptance criteria determine if requirements are fulfiled.

What most people think when they say nonfunctional, are functional requirements that are cross-cutting, or __not discrete but measurable on a sliding scale__.

Many nonfunctional requirements can be considered as constraints on the system's behavior.

 #### Conceptual Deficits

Can result from either incomplete, wrong, or unimplemented nonfunctional requirements.

![Conceptual Deficits](https://i.ibb.co/bBXwVQD/Screen-Shot-2019-11-30-at-22-27-15.png)

 ## Origins of conceptual deficits

__Accidently__ occuring deficits may result from limited rationality or complex/dynamic environments. If a deficit is in place __deliberately__, the principal-agent proble may be the reason, or we can speak of a moral hazard.

 #### Limited Rationality

The chain of rationality often excludes other teams or roles (such as management). This may lead to insufficient concepts (i.e, concepts that are not well understood or not well defined). Deficits include __wrong expectations, infeasible requirements, and nonimplementable specifications__. Such deficits can remain undiscovered until the beginning of the operations phase and beyond.

Management often doesn't have the big picture in mind and only sees its actual desires relevant to its immediate surroundings. Sometimes, management learns a new business aspect while performing it.

 #### Moral Hazard

Moral hazard is a situation in which one party gets involved in a risky event knowing that it is protected against the risk and the other party will incur the cost.

Power relations between teams or roles can lay the ground for a behavioral pattern that can foil the efforts.

 #### Complex and dynamic environments

Not all individual steps and decisions of frequently applied procedures are consciously executed, and not all reasons for those routines are clear to all persons.

* __Management is not always conscious of all dependencies of its actions and wishes__. Not all relevant aspects of a feature requrest are conscious to the management. This problem often leads to incomplete concepts.

* __Management is not always informed__. A solution evolves and a complete department may get its own conclussions on an issue without management's involvement, those ideas may be contrary to the ideas of the management.

* __Management is not always organized and connected in the right way__. Such disconnection spreads the problems of individual issues.

Awareness and commitment of management to DevOps are necessary.

 #### Principal-Agent / Agency dilema

Describes the challenges that may evolve under conditions of incomplete and asymmetric information. The situation arises if the principal (e.g, the company or boss of the department) hires an agent (e.g., external service provider) and wants him or her to pursue the principal's interests.

Often, "_hidden action_" and "_hidden information_" arise ex post (e.g., while or after the agent performs his or her job).

_Hidden actions_ means that the agent has opportunities where he can freely act while fullfilling the principal's task, whereas the principal cannot completely keep track of agent's activities. 

_Hidden information_ exists if the principal can keep track of the agent's activities but cannot evaluate his quality because the principal lacks expert knowledge.

Both situatiosn result in a problematic state in which the principal cannot assess the result to determine whether it arose because of the agent's qualified efforts or because it was caused by the environment.

---
# DevOps - Automatic Releasing
Automating releasing __reduces the risk of releasing software, ensures repeatability, and above all, helps to gain fast feedback__. Automating error-prone, repetitive, and time-consuming activities is essential.

 #### Releasing

Releasing means integrating the work of the team and compiling, linking, packaging and deploying the software to environments (target systems).

The essential parts of releasing are managing the infrastructure, installing the correct version in the infrastructure, and configuring the application according to that specific environment. 

__Releasing is the process of making changes available to the end user__. A deployment can result in a release, but that's not mandatory. Rollout, deploying and releasing are often used as synonyms to describe activities of this transition phase. The content of a release is tested and deployed as a single unit

To gain fast feedback and synchronize across departments continuously, scripts and tool chains support or completely perform repetitive tasks.

 ## Prerequisites for automating releasing

* Promote team commitement in collaborative working environments
* Use highly integrated tool chains consiting of lightweight tools (e.g., Jenkins, Sonar, Maven) that can be choosen and orchestrated as needed
* Put configuration items into version control (source, database scripts, middleware, infrastructure, etc)
* Declarative formats to set up automationg and releasing process wherever possible
* Declare explicitly and isolate dependencies of the application
* Apply __CI__ that __continuosly synchronizes the work of colleagues__, and take special care that you adhere to the followiwing:
    * Don't check in (commit) if build is broken
    * Shape the process when you can check in code (test should run succesfully)
    * Fix broken tests
* Distinguish between version control systems (Git), where you hold your sources, component repositories (such as Artifactory), and package repositoris (YUM) where you hold your software binaries.
* Build binaries once and deploy them to target systems by configuration (application is configured during deployment time or upon startup, not in a static fashion)
* Smoke test deployments to ensure that the deployment went well
* Keep enviornment similar between development and operations (keeping them equal is not practical because of costs and different nonfunctional requirements in specific environments)
* Define a process (also for patching and merging back changes in production versions)
* Cover repetitive and time-consuming tasks through automation, but remember the costs of and the "_paradox_" of automation
* Ensure the delivered software is solely built by the build server and is neither built manually nor patched or built on developers' desktop to ensure reproducibility.

---

 ## Patterns with Appropiate Tools

* Delivery Pipelines
* Baselines
* Share version numbers (Automatically create version numbers)
* Task-based Development
* Database Update scripts

 ### Delivery Pipelines

Also called build pipelines or staged builds, comprise a set of steps and their interdependencies for delivering software. A delivery pipeline __is a metaphor for the process of delivering software__. It indicates that software changes are inputs to the process (the pipeline) at the beginning and are automatically piped through the whole process to the end of the pipeline, which is the production system.

For a more technical viewpoint, a pipeline is a __way of grouping build jobs and putting them into relation to one another__. In other words, pipelines are a __way of orchestrating your build process through a series of quality gates, with automated or manually approval processes at specific stages__. Thus, these pipelines streamline the delivery process of software toward production.

* Compiling software
* Running unit tests
* Running audit or metrics
* Packaging and linking the software
* Deploying the application with all parts of the software version
* Creating backups of the system
* Configuring the application (during deployment or runtime)
* Migrating and preparing data
* Smoke testing application or deployment
* Automatic acceptance testing
* Manual testing (above all, exploratory testing) that emphasize the personal experience and responsabilities of the individual testers
* Promoting the application approval that supports the release
* Creating virtual machines, network, load balancers, monitoring agents, and other infrastructure elements
* Monitoring the application in production

![Example pipeline](https://i.ibb.co/LrSqb5S/Screen-Shot-2019-12-01-at-12-47-56.png)

 ### Baselines

A baseline is a __specification or product that has been formerly reviewed and agreed on, and serves as a basis for further development__. A baseline is often a tag in the version control system.

Don't commit changes back to the baseline. Once created, a baseline does not change over time. Once a baseline is created, you can pick it up again any time you want to retrieve a labeled state reproducibly and apply further work on the baseline.

 ### Shared version numbers

It is essential to find shared names for versions across departments. Collaboratively sharing a version control system, will foster collaboration between development and operations.

We can do many things with the revision number, including adding the number to the name of artifacts or adding a short text to build information.

 ### Task based development

We can align processes with tasks and shared tools.

Work items (issues, defects, incidents) should be managed with a defect-tracking tool, such as JIRA. DevOps means that both development and operations use the same ticket system to track and synchronize their work.

The __task is the unit of interaction of all participants__.
Tasks are spread across artifact types, project phases, and tools. A task can be any one of the following:

* A fine grained, measurable unit of work
* A change
* An incident in production
* A slice from a broader scope, such as a use case

 ### Database Update Scripts

With DevOps, database elements should also be released automatically. It is a good idea to distinguish between database _expansion scripts_ and _contraction scripts_.

Expansion scripts are database changes that can be applied without breaking the database's backward compatibility with the existing version of the software (e.g., adding new columns or tables).

Contraction scripts migrate the database and break backward compatibility. This process conveniently decouples database migrations from application deployment.

 #### Releasing database automatically

One of the more advanced challenges in automating releasing databases is to link the database (the current set of structural elements) in its current version. By having database elements in version control already, you can create a defined baseline.

* Put all database elements to version control
* Create SQL scripts that have to be applied, grouped into single change sets
* Create one file for each change set
* Create baselines where you freeze all configuration items of your application, including database elements
* 
# DevOps - Infrastructure as Code
> To make error is human. To propagate the error to all server in automatic way is DevOps

The infrastructure on which software runs is still quite often a "_work of art_". Infrastructure comprises all of the environments of an organization together with supporting devices, such as firewalls and monitoring services.

Infrastructure is set up and changed over time, before the software even goes into production. Often enough, it would not be an easy task to rebuild your infrastructure from scratch.

__Infrastructure as code__ has become popular to emphasize the need to handle the set up of your infrastructure in the same way you would handle development of your code.

Some of the most popular tools:

* __Vagrant__: tool for managing virtualized development environments
* __Puppet__: tool for managing infrastructure items, often called configurations

 ### Starting with Infrastructure as Code

Tools help developers and operations to work together and enable more transparency on the infrastructure level.

Infrastructure should be:
* Testable
* Auditable
* Transparent

 #### Traditional Infrastructure Handling

In the first phase, as the architecture is not yet fixed, developers will try components and eventually ending up in a first draft of the setup. At this point, there might not even be a shared environment in which software gets deployed continuosly.

Each time developers try things on their local or test environments, they'll then report the change in infrastructure to operations, who then adjust their environments. There is no central, versionized version of the infrastructure that can be considered to be always runable.

 ## Do it better

Have executable specifications, utilizing virtualization to create and destroy their test environments on the fly, as needed.

Gettings new developers on board would simply be a matter of having them check out the specification from version control repository, execute it, and use the same environment as their collegues.

![Infrastructure as Code](https://i.ibb.co/QJFkcrv/Screen-Shot-2019-12-01-at-14-50-15.png)

 #### Test environments with Vagrant

Build virtual environments in an easy way, based on a textual specification in the so-called Vagrant file.

Vagrant is based on Ruby and uses Oracle VirtualBox to run virtual machines.

 #### Provisioning with Puppet

Handling the set up of your infrastructure as code. Up until now, we only created some lightweight virtual machines. Ultimately, we want to create machines complete with software and configuration.

Puppet is a __configuration management tool__ based on Ruby. It allows you to create so-called manifests, which include a description of the system in question.

Puppet uses a domain-specific language to describe a system in form of resources. A resource can be nearly anything, from plain files to software packages, services, or even command executions. These resources can be grouped together in classes, modules or even node definitions.

This is already quite useful for development teams and can also be used to set up and tear down QA environments as needed. Puppet's actual role is to manage every type of environment, be it development or production.
# DevOps - Specification by example
One of the fundamental principles of DevOps is that any build that successfully passes the gauntley of automated checks, can potentially be delivered into production.

It is __not enough to have a set of automated tests__, if you intend to automatically deliver a product into production, every team member must also be convinced of the quality of these tests, in the sense of whether the tests truly capture what the customers desired in the product and whether the tests have informative expressiveness to help developers develop the solution.

 ## Acceptance tests

Developers collaborate as a team to capture customer desires in the form of executable tests, and once they pass, the team turns those into regression checks.

One major benefit of acceptance tests is __transparency__. The product owner should be able to know precisely which features are being delivered in a particular release, including what work and what doesn't. A medium is needed to foster communication between all stakeholders, and that medium can be acceptance tests.

 #### Acceptance tests as a communication vehicle

Automated aceptance testing is as much about publishind and communicating the result of the tests as it is about executing the tests.

[Thucydides](http://www.thucydides.info/#/) open source library designed to make writing and reporting automated acceptance and regression tests easier.

 #### Defining Acceptance Criteria

Specification by example refers to the use of relatively concrete examples to illustrate how a system should work, as opposed to more formally written specifications expressed in very general terms.

 ### BDD - Behavior Driven Developement

BDD takes the position that you can turn an idea for a requirement into implemented, tested, production-ready code simply and effectively, as long as the requirement is specific enough that everyone know what's going on.

BDD uses a story as the basic unit of functionality, and therefore of delivery. The acceptance criteria are an intrinsic part of the story.

# DevOps - Project
 ## DevOps Flow

![DevOps Flow](https://i.ibb.co/rs2hGYz/Screen-Shot-2019-12-14-at-18-50-56.png)
# Docker for Virtualization
 ## Containers are not VMs

Both are designed to provide an isolated enviornment in which to run an application, and that environment is represented as a binary artifact that can be moved between hosts.

They __key distinction__ is the underlying architectures of containers and virtual machines. While containers and VMs have similar resource isolation and allocation benefits, they function differently because __containers virtualize the operating system instead of hardware__. This lightweight form of encapsulation has the effect of making containers both more portable and more efficient than VMs.


 ### VMs

VMs are fully self-contained and offer protection from unwanted guests. They also each possess their own infrastructure, plumbing, heating, electrical, etc... Selling, moving and scaling can be time-consuming, tedious and expensive.

In VM, __the unit of abstraction is a monolithic VM__ that stores not only the application code and dependencies, but also the entire operating system, and often stateful data of the application. a VM takes everything that used to sit on a physical server and just packs it into a single binary so it can be moved around.


 ### Docker containers

Docker containers also offer protection from unwanted guests, but they are build around shared infrastructure. You can setup exactly what you need, and move to different requirements simply.

Docker containers share the underlying resources f the Docker host. Furthermore, developers build a Docker image that includes exactly what they need to run their application, starting with the basics and adding in only what is needed. VMs are built in the opposite direction, they startwith a full operating system, and depending on the application, developers may or may not be able to strip out unwanted components.

With Docker containers, the __abstraction is the application__, or in the move towards microservices, a single service that makes up an application. Applications are now able to be deconstructed into much smaller components which fundamentally changes the way they are intially developed, and ten managed in production. You are now free to completely customize the size and shape of your containers, and indivually monitor how each is doing.

Application data doesn't live in the container, it lives in a Docker volumen that is shared between one or more containers as defined by the application architecture and can be backed by enterprise and cloud storage.

 #### Patch management strategy

Admins update their existing Docker image, stop their running containers, and start up new ones. Because a container can be spun up in a fraction of a second, these updates are done uch faster than they are with virtual machines. No need to reboot an entire OS.

---

 ## Containers and VMs Togethers

VMs in all their forms are a great place for Docker hosts to run. The great thing about Docker is that it doesn't matter where you run containers.

Docker contained-based services can interact wih VM-based services, or any other kind of server, for that matter.

Another area where there can be synergy between VMs and Docker containers, is in the are of __capacity optimization__. A virtualization host, for instance, can host VMs that may, in turn house Docker Engines, but may also host any number of traditonal monolothic VMs. By mixing and matchin Docker hosts with 'traditional' VMs, sysadmins can be assured they are getting the maximum utilization out of their physical hardware.

---

 ## Phyisical or Virtual

That choice is based solely on __what's right for your application and business goals__, phyisical, virtual, cloud or on-premises. Mix and match as your application and business needs dictate and change.

Docker delivers on the promise of allowing you to deploy your application seamlessly, regardless of the underlying infrastructure. You can easily move your application from one infrastructure to another.

* Latency
* Capacity
* Mixed Operating Systems
* Disaster Recovery
* Existing Investments and Automation Framework
* Multitenacy
* Resource Pools / Quotas
* Automation/APIs
* Licensing Costs

 #### Latency

Application with a low tolerance for latency are going to do better on physical. Financial services, like trading applications are a prime example.

 #### Capacity

VMs made their bones by optimizing system load. If your containerized applications don't consume all the capacity on a phyisical box, virtualization still offers a benefit. Plus, with VMs you can carve up your physical resources and dedicate them to groups of user, think of a sandbox environment for a developer team.

 #### Mixed Operating Systems

Physical servers will run a single instance of an operating system and services need to run on their original kernel architecture after they are containerized. If you wish to mix Windows and Linux containers on the same host, you'll need to use virtualization.

 #### Disaster Recovery

One of the great benefits of VMs are advanced capabilities around site recovery and high availability.

 #### Existing Investments and Automation Frameworks

Many organizations have already built a comprehensive set of tools around things like infrastructure provisioning.

 #### Multitenacy

Some customers have workloads that can't share kernels or resources with other workloads. VMs provide an extra layer of isolation compared to running cointaners on bare metal.

 #### Resource Pools / Quotas

Many virtualization solutions have a broad feature set to control and prioritize how virtual machines use shared resources. Docker provides the concept of resource constraints for a container, but if you are concerned about bad actos who might ignore these constraints VMs can add another boundary layer.

 #### Automation / APIs

Very few people in an organization typically have the ability to provision bare metal from an API. If automation is one of the goals, you'll want an API, and that will likely rule out bare metal.

 #### Licensing Costs

Running directly on bare metal can reduce costs as you won't need to purchase hypervisor licenses. And of course, you may not even need to pay anything for the OS that hosts your containers.
