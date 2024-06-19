fhand = open('test.md')
# for line in fhand :
#     line = line.strip()
#     if line.startswith('If') :
#         print(line)

# for line in fhand :
#     line = line.strip()
#     if not line.startswith('If') :
#         print(line)

count = 0
for line in fhand :
    line = line.strip()
    if line != '\n' :
        count += 1
print(count)