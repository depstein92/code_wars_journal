# Write Number in Expanded Form
# You will be given a number and you will need to return it as a string in Expanded Form. For example:
#
# expanded_form(12) # Should return '10 + 2'
# expanded_form(42) # Should return '40 + 2'
# expanded_form(70304) # Should return '70000 + 300 + 4'

def expanded_form(num):

    num_seperated = list(str(num))
    len_of_num = len(num_seperated)
    expanded_num = []

    for index, dig in enumerate(num_seperated):
      if dig == '0':
        pass
      else:
        num_of_zeros = len_of_num - index - 1
        zeros = num_of_zeros * '0'
        expanded_num.append(dig + zeros)

    return ' + '.join(expanded_num)


        
