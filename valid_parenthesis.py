# Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
#
# Examples
# "()"              =>  true
# ")(()))"          =>  false
# "("               =>  false
# "(())((()())())"  =>  true
# Constraints
# 0 <= input.length <= 100
#
# Along with opening (() and closing ()) parenthesis, input may contain any valid ASCII characters. Furthermore, the input string may be empty and/or not contain any parentheses at all. Do not treat other forms of brackets as parentheses (e.g. [], {}, <>).

def valid_parentheses(string):

    if string == "":
      return True

    left_braces = len([ x for x in string if x == ')'])
    right_braces = len([ x for x in string if x == '('])
    filter_braces = filter(lambda x: x == ')' or x == '(', string)
    all_braces = [ y for y in filter_braces ]

    last_brace = all_braces[-1]
    first_brace = all_braces[0]

    braces_even = left_braces == right_braces

    if braces_even and last_brace == ')' and first_brace == '(':
       return True
    else:
       return False
