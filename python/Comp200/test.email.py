import unittest
from email import * 

class Test(unittest.TestCase):

    def newemail():
        assertEqual(newemail("LArry", "SHumlich"), "larry.shumlich@evolveu.ca")
        assertEqual(newemail("", ""), None)
        assertEqual(newemail(), None)
        assertEqual(newemail("Larry", ""), "larry@evolveu.ca")
        assertEqual(newemail("", "Shumlich"), "shumlich@evolveu.ca")
        assertEqual(newemail("Larry"), "larry@evolveu.ca")

        assertEqual(newemail("Heiko", "peter"), "heiko.peter@evolveu.ca")
        assertEqual(newemail("", ""), None)
        assertEqual(newemail(), None)
        assertEqual(newemail("Heiko", ""), "heiko@evolveu.ca")
        assertEqual(newemail("", "peter"), "peter@evolveu.ca")
        assertEqual(newemail("heiko"), "heiko@evolveu.ca")
        
        assertEqual(newemail('Tom', ''), 'tom@evolveu')
        assertEqual(newemail('', ''), '')


if __name__ == '__main__':
    unittest.main() 