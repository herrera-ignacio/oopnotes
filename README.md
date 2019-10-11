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
# BDD vs TDD
The problem with TDD is that it does not say anything about what a coding task is, when a new one should be created, or what kind of changes we should allow.
