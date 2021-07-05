def arithmetic(number_1, number_2, operator)
  numbers = [number_1, number_2]
  operators = {
    'add' => numbers.reduce(:+),
    'subtract' => numbers.reduce(:-),
    'multiply' => numbers.reduce(:*),
    'divide' => numbers.reduce(:/)
  }
operators[operator]
end