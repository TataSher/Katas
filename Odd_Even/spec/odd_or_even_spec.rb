require 'odd_or_even'

describe '#odd_or_even' do
  it 'returns even string if the number is even' do
    expect(odd_or_even([4])).to eq('even')
  end
  it 'returns odd string if the number is odd' do
    expect(odd_or_even([3])).to eq('odd')
  end
  it 'returns odd string if the sum of the array is odd' do
    expect(odd_or_even([3, 3, 4, 1])).to eq('odd')
  end
  it 'returns even string if the sum of the array is even' do
    expect(odd_or_even([3, 2, 4, 1])).to eq('even')
  end
  it 'returns even string if the input is zero' do
    expect(odd_or_even([0])).to eq('even')
  end
end