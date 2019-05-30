# f = open("demofile.txt", "r")

# # print(f.read())
# # for x in f:
# #   print(x)

# print(f.readlines())

# # print(f.readline())
# # print(f.readlines())
# # f.close()
# detach()
# f = open("demofile.txt", "r")
# f.seek(2)
# print(f.readline())
f = open("myfile.txt", "a")
f.write("Now the file has one more line!")
f.flush()
f.write("...and another one!")