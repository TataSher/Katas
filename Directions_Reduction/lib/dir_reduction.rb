def dirReduc(directions)
  opposites = { 
    "north" => "south",
    "south" => "north",
    "east" => "west",
    "west" => "east"
  }
  
new_directions = []
  directions.map do |dir|
    if new_directions.empty?
      new_directions << dir
    elsif new_directions.last.downcase == opposites[dir.downcase]
      new_directions.pop
    else
      new_directions << dir
    end
  end
  new_directions
end
