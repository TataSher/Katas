def update_light(light_colour)
  if light_colour == 'green'
    'yellow'
  elsif light_colour == 'yellow'
    'red'
  elsif light_colour == 'red'
    'green'
  end
end