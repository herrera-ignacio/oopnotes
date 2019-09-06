class Memento
{
  constructor(balance)
  {
    this.balance = balance;
  }
}

class BankAccount
{
  constructor(balance=0)
  {
    this.balance = balance;
    this.changes = [new Memento(balance)];
    this.current = 0;
  }

  deposit(amount)
  {
    this.balance += amount;
    let m = new Memento(this.balance);
    this.changes.push(m);
    this.current++;
    return m;
  }

  restore(m)
  {
    if (m) {
      this.balance = m.balance;
      this.changes.push(m);
      this.current = this.changes.count - 1;
    }
  }

  undo()
  {
    if (this.current > 0)
    {
      let m = this.changes[--this.current];
      this.balance = m.balance;
      return m;
    }
    return null;
  }

  redo()
  {
    if (this.current + 1 < this.changes.length)
    {
      let m = this.changes[++this.current];
      this.balance = m.balance;
      return m;
    }
    return null;
  }

  toString()
  {
    return `Balance: ${this.balance}`;
  }
}

let ba = new BankAccount(100);
let m1 = ba.deposit(50);
let m2 = ba.deposit(25);
console.log(ba.toString()); // 175

// ba.restore(m1);
ba.undo(); // 150
console.log(ba.toString());

// ba.restore(m2);
ba.undo(); // 100
console.log(ba.toString());

ba.redo(); // 150
console.log(ba.toString());
