def vowel_back(str)
  alphabet = "abcdefghijklmnopqrstuvwxyz"
  consonants = "bdfghjklmnpqrstvwxyz"
  vowels = "aeiu"
  exception1 = "co"
  new_str = str.split('').map do |letter|
    if alphabet[0...-9].include?(letter) && consonants.include?(letter)
      letter = alphabet[alphabet.index(letter) + 9]
    elsif alphabet[17..25].include?(letter) && consonants.include?(letter)
      letter = alphabet[alphabet.index(letter) - 17]
    elsif alphabet[4..25].include?(letter) && vowels.include?(letter)
      letter = alphabet[alphabet.index(letter) - 5]
    elsif alphabet[0..3].include?(str) && vowels.include?(letter)
      letter = alphabet[21 + alphabet.index(letter)]
    elsif exception1.include?(letter)
      letter = alphabet[alphabet.index(letter) - 1]
    end
  end
  new_str.join('')
end