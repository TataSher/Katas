require 'sequence_sum'

describe '#sequence_sum' do
  it 'receives the same begin, end and step values and returns the original value' do
    expect(sequence_sum(2,2,2)).to eq(2)
  end
  it 'receives begin, end and step values and returns the sum of the sequence created' do
    expect(sequence_sum(2,6,2)).to eq(12)
  end
  it 'returns 0 if the begin value is greater than the end' do
    expect(sequence_sum(4,2,2)).to eq(0)
  end
  it 'receives begin, end and odd step value and returns the sum of the sequence created' do
    expect(sequence_sum(1,5,1)).to eq(15)
  end
end