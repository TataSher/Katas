# max_sequence method returns the max sum of a consecutive sequence in the array

def max_sequence(array)
  # max_sum = 0
  # current_sum = 0

  if array.all? { |number| number < 0 }
    return 0
  elsif array.all? { |number| number > 0 }
    return array.sum
  else
    array.max
  end
end