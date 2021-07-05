def grow(array)
  array.each do |integer|
    if array.index(integer) == 0
      @product = integer
    else 
      @product *= integer
    end
  end
  @product
end