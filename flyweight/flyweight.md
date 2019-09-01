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
