require 'arithmetic'

describe '#arithmetic' do
  it 'adds 2 given numbers with with add operator' do
    expect(arithmetic(5,2, "add")).to eq 7
  end
  it 'subtracts numbers with subtract operator' do
    expect(arithmetic(5,2,"subtract")).to eq 3
  end
  it 'multiplies numbers with multiply operator' do
    expect(arithmetic(5,2,"multiply")).to eq 10
  end
  it 'divides numbers with divide operator' do
    expect(arithmetic(10,5,"divide")).to eq 2
  end

end