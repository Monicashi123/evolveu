##########################################
#read JavaScript syntax program
import os
infile = open("syntax.html", "r")
lines = 0
words = 0
characters = 0
elsenum = 0
for line in infile:
    wordslist = line.split()
    if 'else' in wordslist:
        elsenum+=1
    lines = lines + 1
    words = words + len(wordslist)
    characters = characters + len(line)
    
print("Total lines:", lines)
print("Total words:", words)
print("Total characters:", characters)
print("Total else numbers is :", elsenum)

#############################################
#Exercise - Reading Directories

import os
thePath = os.getcwd()
theFiles = list(os.listdir(thePath))
n=0
m=0
theFile = dict()
print('---------------------------------------------------------------------------')
for size in theFiles: #Calculate size for all files here. 
    theSize = os.stat(size)
    theFile[size] = theSize
    
    
for item in theFile:
    n=n+1
   
    print("The File: dict{:40s} The Size: dict{:d} Bytes".format(item,theFile[item].st_size))
else:
    print('---------------------------------------------------------------------------')
    print("There are total", n, 'files')
    # print("There are total", m, 'types')

    
################################################################################
#Exercise - Working with data

import csv
with open("Census_By_Community_2018.csv", "r") as f:
    numline = 1
    numchar = 0
    lenrow = 0
    curline = f.readline()
    classes = {}
    sectors = {}
    curline = f.readline()
    while len(curline) > 0:
        splititem = curline.split(",")
        curclass = splititem[0]
        cursector = splititem[4]
        item9 = int(splititem[9])

        lastitem = classes.get(item9,0)
        newitem = lastitem + item9
        classes[curclass] = newitem

        curline = f.readline()

        print(newitem,lastitem,item9)



   