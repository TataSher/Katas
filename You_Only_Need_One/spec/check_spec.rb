require 'check.rb'

describe "#check" do
  it 'returns true if the array with 1 number matches the number given' do
    expect(check([1],1)).to eq true
  end
  it 'returns false if the array with 1 number doesnt match the number given' do
    expect(check([1],2)).to eq false
  end
  it 'returns true if a number given matches a number in the array' do
    expect(check([1, 3, 5], 5)).to eq true 
  end
  it 'returns true if a number given doesnt match a number in the array' do
    expect(check([1, 3, 5], 6)).to eq false 
  end
end