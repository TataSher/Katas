require 'sequence_sum'

describe '#sequenceSum' do
  it 'receives the same begin, end and step values and returns the original value' do
    expect(sequenceSum(2,2,2)).to eq(2)
  end
  it 'receives begin, end and step values and returns the sum of the seqence created' do
    expect(sequenceSum(2,6,2)).to eq(12)
  end
  it 'returns 0 if the begin value is greater than the end' do
    expect(sequenceSum(4,2,2)).to eq(0)
  end
end