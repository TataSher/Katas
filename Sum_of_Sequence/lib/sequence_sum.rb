def sequence_sum(start_value, end_value, step_value)
 (start_value..end_value).step(step_value).each {|number| number}.sum || 0
end