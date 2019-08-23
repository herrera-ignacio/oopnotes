class Person:
    def __init__(self):
        self.name = None
        self.position = None
        self.date_of_birth = None

    def __str__(self):
        return f'{self.name} born on {self.date_of_birth} ' + \
            f'works as {self.position}'

    @staticmethod
    def new():
        return PersonBuilder()


class PersonBuilder:
    """You can use builders than inherit from other builders"""
    def __init__(self):
        self.person = Person()

    def build(self):
        return self.person


class PersonInfoBuilder(PersonBuilder):
    def called(self, name):
        self.person.name = name
        return self


class PersonJobBuilder(PersonInfoBuilder):
    def works_as(self, position):
        self.person.position = position
        return self


class PersonBirthDateBuilder(PersonJobBuilder):
    def born(self, date_of_birth):
        self.person.date_of_birth = date_of_birth
        return self


pb = PersonBirthDateBuilder()
me = pb\
    .called('Dimitri')\
    .works_as('Software Engineer')\
    .born('1/1/1980')\
    .build()
print(me)
