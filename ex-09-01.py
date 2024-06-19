file = open('intro.txt')

di = dict()
for line in file:
    line = line.strip()
    wds = line.split()
    for w in wds:
        di[w] = di.get(w, 0) + 1
# print(di)

# find the most common word
larget = -1
theword = None
for k, v in di.items():
    if v > larget:
        larget = v
        theword = k
print(larget, theword)