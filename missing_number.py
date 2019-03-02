# An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms
# of a given series of numbers.
# You are provided with consecutive elements of an Arithmetic Progression.
# There is however one hitch: exactly one term from the original series is missing from the
# set of numbers which have been given to you. The rest of the given series is the same as
# the original AP. Find the missing term.
# You have to write the function findMissing(list),
# list will always be at least 3 numbers. The missing term will never be the first or last one.

def find_missing(sequence):
    t = sequence
    return (t[0] + t[-1]) * (len(t) + 1) / 2 - sum(t)
