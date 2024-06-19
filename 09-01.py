purse = dict()
purse['money'] = 100
purse['coins'] = 5
purse['cigarettes'] = 20
print(purse)
purse['money'] = purse['money'] + purse['coins'] * 5 + purse['cigarettes'] * 2
print(purse['money'])
print(purse)

print('=====')
counts = dict()
names = ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'sss', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'aaa']
for name in names:
    if name in counts:
        counts[name] += 1
    else:
        counts[name] = 1
print(counts)
print(counts.get('aaa'))
print(counts.get('asd', 0))
print(counts.get('asd'))

print('=====')
jjj = { 1: 'aaa', 2: 'bbb', 'haha': 1 }
print(jjj)
print(jjj.keys())
print(jjj.values())
print(list(jjj))
print(jjj.items())
for aaa, bbb in jjj.items():
    print(aaa, bbb)