import functools


def memoize(fn):
	cache = dict()

	@functools.wraps(fn)
	def memoizer(*args):
		if args not in cache:
			cache[args] = fn(*args)
		return cache[args]

	return memoizer

@memoize
def number_sum(n):
	'''Returns the sum of the first n numbers'''
	assert(n >= 0), 'n must be >= 0'
	if n == 0:
		return 0
	else:
		return n + number_sum(n-1)

@memoize
def fibonacci(n):
	'''Returns the suite of Fibonacci numbers'''
	assert(n >= 0), 'n must be >= 0'
	if n in (0, 1):
		return n
	else:
		return fibonacci(n-1) + fibonacci(n-2)

