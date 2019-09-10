from copy import deepcopy


class Address:
    def __init__(self, street_address, suite, city):
        self.city = city
        self.street_address = street_address
        self.suite = suite

    def __str__(self):
        return f'{self.street_address}, {self.suite}, {self.city}'


class Employee:
    def __init__(self, name, address):
        self.address = address
        self.name = name

    def __str__(self):
        return f'{self.name} works at {self.address}'


class EmployeeFactory:
    main_office_employee = Employee('', Address('123 East Dr', 0, 'London'))
    aux_office_employee = Employee('', Address('123B East Dr', 0, 'London'))

    @staticmethod
    def __new_employee(proto, name, suite):
        result = deepcopy(proto)
        result.name = name
        result.address.suite = suite
        return result

    @staticmethod
    def new_main_office_employee(name, suite):
        return EmployeeFactory.__new_employee(
            EmployeeFactory.main_office_employee,
            name,
            suite
        )

    @staticmethod
    def new_aux_office_employee(name, suite):
        return EmployeeFactory.__new_employee(
            EmployeeFactory.aux_office_employee,
            name,
            suite
        )


john = EmployeeFactory.new_main_office_employee('John', 101)
peter = EmployeeFactory.new_aux_office_employee('Peter', 500)

print(john)
print(peter)