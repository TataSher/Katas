require 'dir_reduction'

describe '#dirReduc' do 
  it 'returns the direction given' do
    expect(dirReduc(["NORTH"])).to eq(["NORTH"])
  end
  it 'returns empty array if North and South directions given' do
    expect(dirReduc(["NORTH", "SOUTH"])).to eq([])
  end
  it 'returns empty array if West and East directions given' do
    expect(dirReduc(["WEST", "EAST"])).to eq([])
  end
  it 'returns directions only if not repeated consecutively' do
    expect(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])).to eq(["WEST"])
  end
end