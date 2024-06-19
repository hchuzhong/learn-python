file = open('intro.txt')

di = dict()
for line in file:
    line = line.strip()
    wds = line.split()
    for w in wds:
        di[w] = di.get(w, 0) + 1

x = sorted(di.items())
tmp = list()
for k, v in x:
    tmp.append((v, k))
tmp.sort(reverse=True)
for v, k in tmp[:5]:
    print(k, v)