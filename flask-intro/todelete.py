import os
if os.path.exists("todelete.txt"):
  os.remove("todelete.txt")
else:
  print("The file does not exist")
