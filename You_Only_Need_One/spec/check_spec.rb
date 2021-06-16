require 'check.rb'

describe "#check" do
  it 'returns true if the array with 1 number matches the number given' do
    expect(check([1],1)).to eq true
  end
end