const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class HotDrink
{
  consume() {}
}

class Tea extends HotDrink
{
  consume() {
    console.log('This tea is nice with lemon!');
  }
}

class Coffee extends HotDrink
{
  consume() {
    console.log('This coffee is delicious!');
  }
}

// Abstract Factory
class HotDrinkFactory
{
  prepare(amount) { /* abstract */ }
}

class TeaFactory extends HotDrinkFactory
{
  prepare(amount)
  {
    console.log(`Put in tea bag, boil water, pour ${amount}ml`);
    return new Tea(); // customize
  }
}

class CoffeeFactory extends HotDrinkFactory
{
  prepare(amount)
  {
    console.log(`Grind some beans, boil water, pour ${amount}ml`);
    return new Coffee(); // customize
  }
}

let AvailableDrink = Object.freeze({
  coffee: CoffeeFactory,
  tea: TeaFactory
});

class HotDrinkMachine
{
  constructor()
  {
    this.factories = {};
    for (let drink in AvailableDrink)
    {
      this.factories[drink] = new AvailableDrink[drink]();
    }
  }

  interact(consumer)
  {
    rl.question('Please specify drink and amount (e.g., tea 50): ', answer => {
      let parts = answer.split(' ');
      let name = parts[0];
      let amount = parseInt(parts[1]);
      let d = this.factories[name].prepare(amount);
      rl.close();
      consumer(d);
    });
  }

  makeDrink(type)
  {
    switch (type)
    {
      case 'tea':
        return new TeaFactory().prepare(200);
      case 'coffee':
        return new CoffeeFactory().prepare(50);
      default:
        throw new Error('');
    }
  }
}

// Usage 1
// let machine = new HotDrinkMachine();
// rl.question('Which drink? (e.g. tea)', function(answer)
// {
//   let drink = machine.makeDrink(answer);
//   drink.consume();
//
//   rl.close();
// });

// Usage 2
let machine2 = new HotDrinkMachine();

machine2.interact(
  function(drink)
  {
    drink.consume();
  }
);
