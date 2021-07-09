def vowel_back(str)
  alphabet = "abcdefghijklmnopqrstuvwxyz"
  consonants = "bghjklmnpqrswxyz"
  vowels = "au"
  exception1 = "co"
  exception2 = "de"
  exception3 = "tfiv"
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
    elsif exception2.include?(letter)
      letter = "a"
    elsif exception3.include?(letter)
      letter 
    end
  end
  new_str.join('')
end