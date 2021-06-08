require 'shortest_arrang'

describe 'shortest_arrang' do
  it 'returns minimum number of groups' do
    expect(shortest_arrang(5)).to eq([3, 2])
  end
end