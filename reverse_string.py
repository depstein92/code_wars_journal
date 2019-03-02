 # Write a function that takes in a string of one or more words, and returns the same string,
 # but with all five or more letter words reversed (Just like the name of this Kata).
 # Strings passed in will consist of only letters and spaces.
 # Spaces will be included only when more than one word is present.

 def spin_words(sentence):

    split_sent = sentence.split(' ')
    reverse_sent = []

    for word in split_sent:
      if len(word) >= 5:
        reverse_sent.append(word[::-1])
      else:
        reverse_sent.append(word)

    return ' '.join(reverse_sent)
