require 'vowel_back'

describe '#vowel_back' do
  it 'Moves consonants forward 9 places through the alphabet' do
    expect(vowel_back('b')).to eq('k')
  end
  it "Moves consonants forward 9 places through the alphabet passing 'z', starting again at 'a'" do
    expect(vowel_back('w')).to eq('f')
  end
  it 'Moves vowels back 5 places through the alphabet' do 
    expect(vowel_back('u')).to eq('p')
  end
end