# -*- coding: utf-8 -*-
"""
Created on Sat May 18 19:42:53 2019

@author: Shi
"""

#number
x=1
y=3
print(x+y)
#x=5
#y=6
print(x*y)
print(5*x+y)
print(5**2)
#string
hello="hello world"
print('hello')

word = 'python'
print(word[1],word[5],word[-2])
list = [ 'abcd', 786 , 2.23, 'runoob', 70.2 ]
tinylist = [123, 'runoob']
print(list)
print(list[0])
print(list[1:3])
print (list[2:]) 
print (tinylist * 2) 
print (list + tinylist)
a = [1, 2, 3, 4, 5, 6]
a[0]=9
print(a[2:5])
print(a)
a[2:5]=[]
print(a)
#tuple
tuple = ( 'abcd', 786 , 2.23, 'runoob', 70.2  )
tinytuple = (123, 'runoob')
 
print (tuple)             # 输出完整元组
print (tuple[0])          # 输出元组的第一个元素
print (tuple[1:3])        # 输出从第二个元素开始到第三个元素
print (tuple[2:])         # 输出从第三个元素开始的所有元素
print (tinytuple * 2)     # 输出两次元组
print (tuple + tinytuple) # 连接元组

#set
student = {'Tom', 'Jim', 'Mary', 'Tom', 'Jack', 'Rose'}
 
print(student)   # 输出集合，重复的元素被自动去掉
 
# 成员测试
if 'Rose' in student :
    print('Rose 在集合中')
else :
    print('Rose 不在集合中')
    
    
#dictionary
dict = {}
dict['one'] = "1 - 菜鸟教程"
dict[2]     = "2 - 菜鸟工具"
 
tinydict = {'name': 'runoob','code':1, 'site': 'www.runoob.com'}
 
 
print (dict['one'])       # 输出键为 'one' 的值
print (dict[2])           # 输出键为 2 的值
print (tinydict)          # 输出完整的字典
print (tinydict.keys())   # 输出所有键
print (tinydict.values()) # 输出所有值

#function
def my_function(x):
  return 5 * x

print(my_function(3))
print(my_function(5))
print(my_function(9))

# 可写函数说明
def sum( arg1, arg2 ):
   # 返回2个参数的和."
   total = arg1 + arg2
   print ("函数内 : ", total)
   return total
 
# 调用sum函数
total = sum( 10, 20 )
print ("函数外 : ", total)


#array
cars = ["Ford", "Volvo", "BMW"]
print(cars[0])
print(cars.append('honda'))
print(cars)
cars.pop(1)
#cars.remove["Volvo"]
cars.remove("BMW")

#x=cars.len()
print(cars)

#loops
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)
  
def tri_recursion(k):
  if(k>0):
    result = k+tri_recursion(k-1)
    print(result)
  else:
    result = 0
  return result

print("\n\nRecursion Example Results")
tri_recursion(6)


class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

p1 = Person("John", 36)

print(p1.name)
print(p1.age)



    