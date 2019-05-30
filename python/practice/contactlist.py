# -*- coding: utf-8 -*-
"""
Created on Sat May 18 18:32:32 2019

@author: Shi
"""

 1 #创建你自己的命令行 地址簿 程序。在这个程序中，
 2 #你可以添加、修改、删除和搜索你的联系人（朋友、家人和同事等等）
 3 #以及它们的信息（诸如电子邮件地址和/或电话号码）。
 4 #这些详细信息应该被保存下来以便以后提取。
 5 # python version 3.4.3
 6 import pickle as p
 7 import sys
 8 import os
 9 
10 filename = 'phonebook.data'
11 
12 #创建一个类表示人的信息
13 class member:
14     def __init__(self,name,mail,phone):
15         self.name = name
16         self.mail = mail
17         self.phone = phone
18 
19 #从文件中取出对象并返回
20 def readbypickle(filename):
21     f = open(filename,'rb')
22     infos = p.load(f)
23     f.close()
24     return infos
25 
26 #将对象写入文件中
27 def writebypickle(infos,filename):
28     f = open(filename,'wb')
29     p.dump(infos,f)
30     f.close()
31 
32 def scanall():
33     infos = readbypickle(filename)
34     for name,info in infos.items():
35         print(name,'\t',info)
36     del infos
37     #infos在这里是对象，用完记得清掉
38 
39 #key in someone,receive the info
40 def search():
41     infos = readbypickle(filename)
42     person = input('Please enter the name you are search:')
43     if person in infos:
44         print('Result:',infos[person])
45     else:
46         print('No data!')
47     del infos
48 
49 def update():
50     info = input('Please enter your updating info like:someone,abc@163.com,123: \n')
51     info_1 = info.split(',')
52     temp = member(info_1[0],info_1[1],info_1[2])
53     infos = readbypickle(filename)
54     infos[temp.name] = temp.mail + ',' + temp.phone
55     writebypickle(infos,filename)
56     del infos
57 
58 def delete():
59     infos = readbypickle(filename)
60     info = input('Please enter the name that you want to delete: ')
61     try:
62         del infos[info]
63     except:
64         print('delete failed,please check your input.')
65     finally:
66         print(infos)
67         writebypickle(infos,filename)
68         del infos
69 
70 def main():
71     while True:
72         command = input('\n==========Menu==========\n1 scan\n2 search\n3 update\n4 delete\n5 exit\n')
73         if command == '1':
74             scanall()
75         elif command == '2':
76             search()
77         elif command == '3':
78             update()
79         elif command == '4':
80             delete()
81         else:
82             sys.exit()
83 print('VersionInfo:',sys.version)
84 if(os.path.exists(filename)):
85     main()
86 else:
87     infos = {'Rebecah':'Rebecah@163.com,12345'}
88     writebypickle(infos,filename)
89     main()