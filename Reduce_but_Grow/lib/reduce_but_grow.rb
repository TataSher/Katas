def grow(array)
  array.each_with_index do |integer, index|
   index == 0 ? @product = array[0] : @product *= integer
  end
  @product
end