# x = int(input("Enter first Number:"))
# y = int(input("Enter second Number:"))
# action = input ('Enter Add please: ')
def add(x,y):
    return x+y
print ('Add')

def sub(x,y):
    return x-y
print ('Sub')

def mul(x,y):
    return x*y
print ('Mul')

def div(x,y):
    return x/y
print ('Div')

x = int(input("Enter first Number:"))
y = int(input("Enter second Number:"))
action = input ('Enter Add please: ')

if action == 'Add':
    print('Add result is :', add(x,y))

elif action == 'Sub':
    print('Subtruct result is :', sub(x,y))

elif action == 'Mul':
    print('Multiple result is :', mul(x,y))

elif action == 'Div':
    print('Divided result is :', div(x,y))

else:
    print('Valid number')