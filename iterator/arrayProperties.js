class Creature
{
  constructor()
  {
    this.stats = new Array(3).fill(10);
  }

  get strength() { return this.stats[0]; }
  set strength(value) { this.stats[0] = value; }

  get agility() { return this.stats[0]; }
  set agility(value) { this.stats[0] = value; }

  get intelligence() { return this.stats[0]; }
  set intelligence(value) { this.stats[0] = value; }

  get sumOfStats()
  {
    return this.stats.reduce((x, y) => x+y, 0);
  }

  get averageStat()
  {
    return this.sumOfStats / this.stats.length;
  }

  get maxStat()
  {
    return Math.max(...this.stats);
  }
}

let creature = new Creature();
creature.strength = 10;
creature.agility = 11;
creature.intelligence = 15;
console.log(`Creature has average stat ${creature.averageStat},
  max stat ${creature.maxStat}, sum of stats ${creature.sumOfStats}`);
