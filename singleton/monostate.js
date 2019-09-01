class ChiefExecutiveOfficer
{
  get name() { return ChiefExecutiveOfficer._name; }
  set name(value) { ChiefExecutiveOfficer._name = value; }

  get age() { return ChiefExecutiveOfficer._age; }
  set age(value) { ChiefExecutiveOfficer._age = value; }
}

// Share variables between all instances!
ChiefExecutiveOfficer._age = undefined;
ChiefExecutiveOfficer._name = undefined;

let ceo = new ChiefExecutiveOfficer();
ceo.name = 'Adam Smith';
ceo.age = '30';

let ceo2 = new ChiefExecutiveOfficer();
console.log(ceo2.name);
