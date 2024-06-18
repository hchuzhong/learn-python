total = 0
count = 0
while True:
    curInput = input('Enter a number: ')
    if curInput == 'done' :
        break;
    try:
        curNumber = float(curInput)
    except:
        print('Invalid input')
        continue
    total += curNumber
    count += 1
print('total:', total, 'count:', count, 'average:', total / count)