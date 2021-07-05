require 'triangular'

describe 'triangular' do
  it 'returns 1 when given 1' do
    expect(triangular(1)).to eq 1
  end
  it 'returns 3 when given 2' do
    expect(triangular(2)).to eq 3
  end
  it 'returns 6 when given 3' do
    expect(triangular(3)).to eq 6
  end
  it 'returns 0 for out of range numbers' do
    expect(triangular(-10)).to eq 0
  end
end