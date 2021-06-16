def check(array, number)
  result = false
  array.each do |arr_number| 
    p arr_number
     arr_number == number ? result = true : result 
  end
  result
end