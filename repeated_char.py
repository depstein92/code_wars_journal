def duplicate_count(text):
    l = list(text)
    unique_list = {}
    rep_char = 0

    for char in l:
      if char not in unique_list:
          if char.lower() in unique_list:
            key = '{}'.format(char).lower()
            unique_list[key] += 1
          elif char.upper() in unique_list:
            key = '{}'.format(char).lower()
            unique_list[key] += 1
          else:
            key = '{}'.format(char).lower()
            unique_list[key] = 0
      else:
        key = '{}'.format(char)
        unique_list[key] += 1

    for key, val in unique_list.items():
        if val > 0:
            rep_char += 1
    return rep_char
