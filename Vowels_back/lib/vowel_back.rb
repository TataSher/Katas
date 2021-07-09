def vowel_back(str)
  alphabet = "abcdefghijklmnopqrstuvwxyz"
    if alphabet[0...-9].include?(str)
      str = alphabet[alphabet.index(str) + 9]
    elsif alphabet[17..25] 
      str = alphabet[alphabet.index(str) - 17]
    end
end