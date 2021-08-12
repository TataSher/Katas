require 'volume_cuboid'

describe '#get_volume_of_cuboid' do
  it 'calculates volume of a cuboid with length, width and height' do
    expect(get_volume_of_cuboid(2, 3, 4)).to eq 24
  end
end