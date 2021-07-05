def arithmetic(number_1, number_2, operator)
  if operator == 'add'
    number_1 + number_2
  elsif operator == 'subtract'
    number_1 - number_2
  elsif operator == 'multiply'
    number_1 * number_2
  elsif operator == 'divide'
    number_1 / number_2
  end
end