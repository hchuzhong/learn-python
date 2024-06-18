try:
    hours = float(input("Enter Hours: "))
    rate = float(input("Enter Rate: "))
except:
    print("Error, please enter a number")
    quit()
pay = 0
if (hours > 40):
    extra_hour = hours - 40;
    pay = 40 * rate + extra_hour * rate * 1.5;
else:
    pay = hours * rate;
print("Pay: ", pay)