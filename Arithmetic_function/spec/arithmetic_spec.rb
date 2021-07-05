require 'arithmetic'

describe '#arithmetic' do
  it 'adds 2 given numbers with with add operator' do
    expect(arithmetic(5,2, "add")).to eq 7
  end
end