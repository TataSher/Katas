def vowel_back(str)
  alphabet = "abcdefghijklmnopqrstuvwxyz"
    alphabet.include?(str) ? str = alphabet[alphabet.index(str) + 9] : str
end