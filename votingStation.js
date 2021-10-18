const chooseStations = function (stations) 
{
  const goodStations = [] 
  for (const each_station of stations) 
  {
    const  capacity = each_station[1]
    if (capacity >= 20) 
    {
      const type = each_station[2]
      if (type === "community centre" || type === "school") 
      {
        goodStations.push(each_station[0])
      }
    }
  }
  return goodStations
}


