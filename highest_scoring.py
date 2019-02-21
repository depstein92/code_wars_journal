# Given a string of words, you need to find the highest scoring word.
#
# Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.
#
# You need to return the highest scoring word as a string.
#
# If two words score the same, return the word that appears earliest in the original string.
#
# All letters will be lowercase and all inputs will be valid.

def high(x):
    sentence = x.strip().split(' ')
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    word_count = []
    words = []

    for word in sentence:
      if len(word) <= 1:
        word_count.append(alphabet.find(char))
        words.append(word)
      else:
        sum_of_word = []
        for char in word:
          sum_of_word.append(alphabet.find(char))

        word_count.append(sum(sum_of_word))
        words.append(word)

    highest_num = word_count.index(max(word_count))
    return words[highest_num]
