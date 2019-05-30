import csv

data = [("Ken", "msfe", 88), ("TeMe", "maee",999), ("Js", "fele", 9992)]

with open('test6.csv', 'w', newline='') as t_file:

   csv_writer = csv.writer(t_file)

   for abc in data:

       csv_writer.writerow(abc)