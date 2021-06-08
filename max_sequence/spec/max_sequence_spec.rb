require 'max_sequence'

describe 'max_sequence()' do
  it 'returns a positive number when only one number is given in array' do
    expect(max_sequence([11])).to eq(11)
  end
end