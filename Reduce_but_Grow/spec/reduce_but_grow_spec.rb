require 'reduce_but_grow'

describe '#grow' do 
  it 'accepts an array with one integer and returns an integer' do
    expect(grow([1])).to eq 1
  end
  it 'accepts an array with several integers and returns multiplied value' do
    expect(grow([1, 2, 3])).to eq 6
  end
  it 'accepts an array with several repeated integers and returns multiplied value' do
    expect(grow([4, 1, 1, 1, 4])).to eq 16
  end
end