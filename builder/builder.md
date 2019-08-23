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