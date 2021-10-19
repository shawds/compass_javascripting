const judgeVegetable = function (vegetables, metric) 
{
  return vegetables.reduce( (winner, contestant) =>
    contestant[metric] > winner[metric] ? contestant : winner).submitter
}

// Calling the Fn:
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)