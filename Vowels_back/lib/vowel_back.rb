def vowel_back(str)
  alphabet = "abcdefghijklmnopqrstuvwxyz"
  consonants = "bcdfghjklmnpqrstvwxyz"
  vowels = "aeiou"
    if alphabet[0...-9].include?(str) && consonants.include?(str)
      str = alphabet[alphabet.index(str) + 9]
    elsif alphabet[17..25].include?(str) && consonants.include?(str)
      str = alphabet[alphabet.index(str) - 17]
    elsif alphabet[4..25].include?(str) && vowels.include?(str)
      str = alphabet[alphabet.index(str) - 5]
    elsif alphabet[0..3].include?(str) && vowels.include?(str)
      str = alphabet[21 + alphabet.index(str)]
    end
end