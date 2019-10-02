from pyparsing import Word, OneOrMore, Optional, Group, Suppress, alphanums
# pip install pyparsing


class Gate:

	def __init__(self):
		self.is_open = False

	def __str__(self):
		return 'open' if self.is_open else 'closed'

	def open(self):
		print('opening the gate')
		self.is_open = True

	def close(self):
		print('closing the gate')
		self.is_open = False


class Garage:

	def __init__(self):
		self.is_open = False

	def __str__(self):
		return 'open' if self.is_open else 'closed'

	def open(self):
		print('opening the garage')
		self.is_open = True

	def close(self):
		print('closing the garage')
		self.is_open = False


class Aircondition:

	def __init__(self):
		self.is_on = False

	def __str__(self):
		return 'on' if self.is_open else 'off'

	def turn_on(self):
		print('turning on the air condition')
		self.is_on = True

	def turn_off(self):
		print('turning off the aircondition')
		self.is_on = False


def main():
	word = Word(alphanums)
	command = Groups(OneOrMore(word))
	token = Suppress("->")
	device = Group(OneOrMore(word))
	argument = Group(OneOrMore(word))
	event = command + token + device + Optional(token + argument)

	gate = Gate()
	garage = Garage()
	airco = Aircondition()

	tests = (
		'open -> gate',
		'close -> garage'
		'turn on -> air condition'
	)
	open_actions = {
		'gate':gate.open,
		'garage':garage.open,
		'air condition':airco.turn_on
	}
	close_actions = {
		'gate': gate.close,
		'garage': garage.close,
		'air condition': airco.turn_off
	}

	for t in tests:
		if len(event.parseString(t)) == 2:
			# no argument
			cmd, dev = event.parseString(t)
			cmd_str, dev_str = ' '.join(cmd), ' '.join(dev)
			if 'open' in cmd_str or 'turn on' in cmd_str:
				open_actions[dev_str]()
			elif 'close' in cmd_str or 'turn off' in cmd_str:
				close_actions[dev_str]()
		elif len(event.parseString(t)) == 3:
			# argument
			pass

if __name__ == '__main__':
	main()
