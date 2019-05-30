def newemail(first, last):
    
    first = "";
    last = "";
    email = '';
    tail = '@evolveu.ca'

    if length(first.lower()) >= 0:
        if length(last.lower()) >  0:
             email = first+'.'+ last + 'tail'
        else:
            email = first + 'tail'
    else:
        if length(last) > 0:
            email = last+ 'tail'
    
    return email

