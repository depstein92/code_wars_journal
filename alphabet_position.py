
# In this kata you are required to, given a string, replace every letter with its position in the alphabet.
#
# If anything in the text isn't a letter, ignore it and don't return it.
#
# "a" = 1, "b" = 2, etc.
#
# Example
# alphabet_position("The sunset sets at twelve o' clock.")

def alphabet_position(text):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    uppercase_alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    indexs = []
    no_whitespace = text.strip().replace(' ', '')

    for char in no_whitespace:
        index_of_char = alphabet.find(char)
        if index_of_char == -1:
          index_of_upper_char = uppercase_alphabet.find(char.upper())
          indexs.append(index_of_upper_char)
        else:
          indexs.append(index_of_char)

    remove_neg_val = [num for num in indexs if num != -1 ]
    return ' '.join([ str(num + 1) for num in remove_neg_val ])
