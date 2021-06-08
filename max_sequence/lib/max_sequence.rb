# max_sequence method returns the max sum of a consecutive sequence in the array

def max_sequence(array)
   max_sum = array[0]
   current_sum = 0

  if array.all? { |number| number < 0 }
    return 0
  else
    array.each {|number| 
    current_sum = [number, current_sum + number].max
    max_sum = [max_sum, current_sum].max}
    max_sum
  end
end