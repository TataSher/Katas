require 'update_light.rb'

describe '#update_light' do
  it 'takes a green light and returns yellow' do
    expect(update_light('green')).to eq('yellow')
  end
  it 'takes a yellow light and returns red' do
    expect(update_light('yellow')).to eq('red')
  end
  it 'takes a red light and returns green' do
    expect(update_light('red')).to eq('green')
  end
  it 'any other input will return as an error' do
    expect{ update_light(4) }.to raise_error('Wrong input')
  end
end