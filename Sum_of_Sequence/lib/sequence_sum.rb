def sequence_sum(start_value, end_value, step_value)
  array = (start_value..end_value).to_a
  @new_array = [start_value]
  array.map do |value|
    if @new_array.last < end_value
      @new_array << @new_array.last + step_value
    end
  end
  start_value > end_value ? 0 : @new_array.sum
end