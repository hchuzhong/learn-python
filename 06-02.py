s = 'Monty Python'
print(s[0:4])
print(s[6:7])
print(s[6:100])
print(s[0:7])
print(s[6:])
print(s[:])
print(s[20:])
print(s[:-1])
print(s[-1:-2])
print(s[-2:-1])

print('=====')
print('n' in s)
print('asd' in s)

print('=====')
print('a' > 'b')
print('a' > 'B')
print('A' > 'b')
print('b' > 'a')

print('=====')
greet = 'Hello, world!'
print(greet.lower())
print(greet.upper())

print('=====')
stuff = 'This is a string'
type(stuff)
dir(stuff)
print(stuff.find('a'))
print(stuff.replace('This', 'Here'))

print('=====')
greet = '     Hello 1234567890   '
print(greet.lstrip())
print(greet.rstrip())
print(greet.strip())

print('=====')
line = 'Have a nice day'
print(line.startswith('Have'))
print(line.startswith('have'))