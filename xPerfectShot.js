const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

const finalPosition = function (moves) 
{
  let co_ords = [0, 0]

  for (let i of moves)
  {
    if (i === "north") co_ords[1] ++
    else if (i === "south")  co_ords[1] --
    else if (i === "east")  co_ords[0] ++
    else  co_ords[0] --
  }
  return co_ords  
}

console.log(finalPosition(moves))
