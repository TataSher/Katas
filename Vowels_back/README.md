https://www.codewars.com/kata/57cfd92c05c1864df2001563/train/ruby

## Instructions

You need to play around with the provided string (s).

Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

Exceptions:

If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

Provided string will always be lower case, won't be empty and will have no special characters.


Input                 |   Output
vowel_back('b')       |   'k'
vowel_back('w')       |   'f'
vowel_back('u')       |   'p'
vowel_back('a')       |   'v'
vowel_back('co')      |   'bn'
vowel_back('de')      |   'aa'
vowel_back('tfiv')    |   'tvfiv'