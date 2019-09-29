class Club:
	def __init__(self, name):
		self.name = name

	def __str__(self):
		return f'the club {self.name}'

	def organize_event(self):
		return 'hires an artist to perform for the people'


class Musician:
	def __init__(self, name):
		self.name = name

	def __str__(self):
		return f'the musician {self.name}'

	def play(self):
		return 'plays music'


class Dancer:
	def __init__(self, name):
		self.name = name

	def __str__(self):
		return f'the dancer {self.name}'

	def dance(self):
		return 'does a dance performance'


# Client code, only knows how to call the organize_performance() method on the club class
# It has no idea about play() or dance()

class Adapter:
	def __init__(self, obj, adapted_methods):
		self.obj = obj
		self.__dict__.update(adapted_methods)

	def __str__(self):
		return str(self.obj)


def main():
	objects = [Club('Jazz Cafe'), Musician('Roy Ayers'), Dancer('Shane Sparks')]

	for obj in objects:
		if hasattr(obj, 'play') or hasattr(obj, 'dance'):
			if hasattr(obj, 'play'):
				adapted_methods = dict(organize_event=obj.play)
			elif hasattr(obj, 'dance'):
				adapted_methods = dict(organize_event=obj.dance)
			obj = Adapter(obj, adapted_methods)


		print(f'{obj} {obj.organize_event()}')

main()

