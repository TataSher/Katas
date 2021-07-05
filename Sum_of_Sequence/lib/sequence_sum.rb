def sequenceSum(start_value, end_value, step_value)
  array = (start_value..end_value).to_a
  @new_array = []
  array.map do |number|
    if number % step_value == 0
      @new_array << number
    end
  end
  p @new_array
  @new_array.sum
end