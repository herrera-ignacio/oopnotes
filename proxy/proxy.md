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
