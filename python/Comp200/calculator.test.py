import unittest
import calculator 

class Test(unittest.TestCase):

    def test_add_method(self):
        result = calculator.add()
        self.assertEqual(result)  

    if  __name__ == '__main__': 
        unittest.main() 