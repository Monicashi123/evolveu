import unittest
import calculator 

class Test(unittest.TestCase):

    def test_add_method(self):
        result = calculator.add(8,2)
        self.assertEqual(10, result)  

if __name__ == '__main__':
    unittest.main() 