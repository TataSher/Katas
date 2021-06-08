require 'update_light.rb'

describe '#update_light' do
  it 'takes a green light and returns yellow' do
    expect(update_light('green')).to eq('yellow')
  end
  it 'takes a yellow light and returns red' do
    expect(update_light('yellow')).to eq('red')
  end
end