class Address
{
  constructor(streetAddress, city, country)
  {
    this.streetAddress = streetAddress;
    this.city = city;
    this.country = country;
  }

  deepCopy()
  {
    return new Address(
      this.streetAddress,
      this.city,
      this.country
    );
  }

  toString()
  {
    return `Address: ${this.streetAddress}, ${this.city}, ${this.country}`
  }
}

class Person
{
  constructor(name, address)
  {
    this.name = name;
    this.address = address;
  }

  deepCopy()
  {
    return new Person(
      this.name,
      this.address.deepCopy()
    );
  }

  toString()
  {
    return `${this.name} lives at ${this.address}`
  }
}

// Copy through Serialization
class Serializer
{
  constructor(types)
  {
    this.types = types;
  }

  markRecursive(object)
  {
    let idx = this.types.findIndex(t => {
      return t.name === object.constructor.name;
    });

    if (idx !== -1)
    {
      object['typeIndex'] = idx;

      for (let key in object)
      {
        if (object.hasOwnProperty(key))
          this.markRecursive(object[key]);
      }
    }
  }

  reconstructRecursive(object)
  {
    if (object.hasOwnProperty('typeIndex'))
    {
      let type = this.types[object.typeIndex];
      let obj = new type();
      for (let key in object)
      {
        if (object.hasOwnProperty(key) && object[key] != null)
        {
          obj[key] = this.reconstructRecursive(object[key]);
        }
        delete obj.typeIndex;
        return obj;
      }
    }
    return object;
  }

  clone(object)
  {
    this.markRecursive(object);
    let copy = JSON.parse(JSON.stringify(object));
    return this.reconstructRecursive(copy);
  }
}


// explicit copy
let john = new Person('John',
  new Address('123 London Road', 'London', 'UK'));

let jane = john.deepCopy();

// serializer copy
let s = new Serializer([Person, Address]);
let peter = JSON.parse(JSON.stringify(john));


/* Prototype Factory */
class EmployeeFactory
{
  static _newEmployee(proto, name, suite)
  {
    let copy = EmployeeFactory.serializer.clone(proto);
    copy.name = name;
    copy.address.suite = suite;
    return copy;
  }

  static newMainOfficeEmployee(name, suite)
  {
    return this._newEmployee(
      EmployeeFactory.main, name, suite
    );
  }

  static newAuxOfficeEmployee(name, suite)
  {
    return this._newEmployee(
      EmployeeFactory.aux, name, suite
    );
  }
}
// prototypes
EmployeeFactory.serializer = new Seriaizer([Employee, Address]);
EmployeeFactory.main = new Employee(null,
  new Address(null, '123 East Dr', 'London'));
EmployeeFactory.aux = new Employee(null,
  new Address(null, '200 London Rd', 'Oxford'));

// using factory

let max = EmployeeFactory.newMainOfficeEmployee('Max', 4321)
