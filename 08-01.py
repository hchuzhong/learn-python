a = [1, 2, 3, 4, 5]
b = [6, 7, 8, 9]
c = a + b
print(a)
print(c)
print(c[1:3])

print('=====')
stuff = list()
stuff.append('hello')
stuff.append(1000)
print(stuff)
stuff.append(10.2)
print(stuff)
print(1000 in stuff)
print(1 in stuff)

print('=====')
friends = ['asdasc', 'bzxcasd', 'asdxac', 'asdd']
print(friends)
friends.sort()
print(friends)
print(max(friends))

print('=====')
nums = [123, 3, 12, 5, 33, 44, 9]
print(len(nums))
print(max(nums))
print(min(nums))
print(sum(nums))
print(sum(nums) / len(nums))

print('=====')
abc = 'With   three words       amd yes'
words = abc.split()
print(words)
print(words[0])
print(len(words))
line = '123,456,789'
splitNums = line.split(',')
print(splitNums)