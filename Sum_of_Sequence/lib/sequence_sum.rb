def sequence_sum(start_value, end_value, step_value)
  start_value > end_value ? 0 : (start_value..end_value).step(step_value).to_a.sum
end