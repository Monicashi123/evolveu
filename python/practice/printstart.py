score = int(raw_input('input score:\n'))
if score >= 90:
    grade = 'A'
elif score >= 60:
    grade = 'B'
else:
    grade = 'C'

print "%d belongs to %s" % (score,grade)