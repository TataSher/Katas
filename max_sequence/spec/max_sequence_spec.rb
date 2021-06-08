require 'max_sequence'

describe 'max_sequence()' do
  it 'returns a positive number when only one number is given in array' do
    expect(max_sequence([11])).to eq(11)
  end
  it 'returns a sum of positive numbers if several positive numbers are given' do
    expect(max_sequence([1, 2, 3])).to eq(6)
  end
  it 'returns a 0 if only a negative number is given' do
    expect(max_sequence([-32])).to eq(0)
  end
  it 'returns a 0 if several negative numbers are given only' do
    expect(max_sequence([-1, -2, -3])).to eq(0)
  end
  it 'returns a 0 if empty array is given' do
    expect(max_sequence([])).to eq(0)
  end
  it 'returns a positive number if a positive and negative is given in an array' do
    expect(max_sequence([1, -1])).to eq(1)
  end
  it 'returns a larger number if given 3 numbers with a negative in the middle' do
    expect(max_sequence([1, -1, 2])).to eq(2)
  end
  it 'returns a sum of positive numbers before the negative number' do
    expect(max_sequence([1, 2, -1])).to eq(3)
  end
  it 'returns a the maximum sum in the sequence of numbers' do
    expect(max_sequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])).to eq(6)
  end
end