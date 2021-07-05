def sequence_sum(start_value, end_value, step_value)
 (start_value..end_value).step(step_value).reduce(:+) || 0
end