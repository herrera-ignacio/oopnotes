class Stuff
{
  constructor()
  {
    this.a = 11;
    this.b = 22;
  }

  [Symbol.iterator]()
  {
    let i = 0;
    let self = this;
    return {
      next: function()
      {
        return {
          done: i > 1,
          value: self[i++ === 0 ? 'a' : 'b']
        };
      }
    }
  }

  get backwards()
  {
    let i = 0;
    let self = this;
    return {
      next: function()
      {
        return {
          done: i > 1,
          value: self[i++ === 0 ? 'b' : 'a']
        };
      },
      [Symbol.iterator]: function() { return this; }
    }

  }
}

// Using Symbol.iterator from Stuff class
let stuff = new Stuff();
for (let item of stuff)
{
  console.log(`Stuff item: ${item}`);
}
for (let item of stuff.backwards)
{
  console.log(`Stuff backwards: ${item}`);
}

// Common iterations
let values = [100, 200, 300];
for (let i in values)
{
  console.log(`Element at pos ${i} is ${values[i]}`);
}

for (let v of values)
{
  console.log(`Value is ${v}`);
}
