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
  it "Moves vowels back 5 places through the alphabet passing 'a' and starting at 'z'" do 
    expect(vowel_back('a')).to eq('v')
  end
  it "Moves 'c' or 'o' characters back 1 place" do
    expect(vowel_back('co')).to eq('bn')
  end
  it "Moves 'd' and 'e' to 'a'" do
    expect(vowel_back('de')).to eq('aa')
  end
end