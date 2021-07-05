require 'reduce_but_grow'

describe '#grow' do 
  it 'accepts an array with one integer and returns an integer' do
    expect(grow([1])).to eq 1
  end
end