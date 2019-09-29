import abc
import urllib


class ResourceContent:
	"""
	Define the abstraction's interface.
	Maintain a reference to an object which represents The Implementor (_imp)
	"""

	def __init__(self, imp):
		self._imp = imp

	def show_content(self, path):
		self._imp.fetch(path)


class ResourceContentFetcher(metaclass=abc.ABCMeta):
	"""
	Define the interface for implementation classes that fetch content
	"""

	@abc.abstractmethod
	def fetch(path):
		pass


class URLFetcher(ResourceContentFetcher):
	"""
	Implement the Implementor interface and define its concrete implementation
	"""

	def fetch(self, path):
		# path is an URL
		req = urllib.request.Request(path)
		with urllib.request.urlopen(req) as response:
			if response.code == 200:
				the_page = response.read()
				print(the_page)


class LocalFileFetcher(ResourceContentFetcher):
	"""
	Implement the Implementor interface and define its concrete implementation
	"""

	def fetch(self, path):
		# path is the filepath to a text file
		with open(path) as f:
			print(f.read())