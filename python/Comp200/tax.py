# -*- coding: utf-8 -*-
"""
Created on Sat May 18 18:11:20 2019

@author: Shi
"""
amount = int(input("Enter amount : "))
# amount = float(input())
tax = 0

if amount > 210371:
    tax = (47630 * 0.15) + (47629 * 0.205) + (52408 *0.26) + (62704 * 0.29) + ((amount-210371) * 0.33)

elif  amount >147667 and amount <=210371:
    tax = (amount - 147667) * 0.29 + (52408*0.26) + (47629*.205) + (47630*0.15)

elif amount > 95259 and amount <=147667:
    tax = (amount - 95259) * 0.26 + (47629 * 0.205) + (47630 * 0.15)

elif amount > 47630 and amount <= 95259:
    tax = (amount - 47630) * 0.205 + 47630 * 0.15

else:	tax = (amount * 0.15)

print("Total tax is : ", tax)

