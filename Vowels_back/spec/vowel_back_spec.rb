require 'vowel_back'

describe '#vowel_back' do
  it 'Moves consonants forward 9 places through the alphabet' do
    expect(vowel_back('b')).to eq('k')
  end
end