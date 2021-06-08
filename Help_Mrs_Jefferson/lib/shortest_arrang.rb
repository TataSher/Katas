def shortest_arrang(n)
  groups = []
  n = n.to_f/2
  groups << n.ceil
  groups << n.floor
end