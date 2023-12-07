const people = [
    {
      name: 'Chico',
      points: 5,
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Mary',
      points: 10,
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ]
  
  export default function ScoreBoard() {
    const peopleAscending = [...people].sort((a, b) => b.points - a.points);
    return (
      <ul points="list" className="divide-y divide-gray-100">
        {peopleAscending.map((peopleAscending) => (
          <li key={peopleAscending.name} className="flex items-center justify-between gap-x-6 py-5">
            <div className="flex items-center min-w-0 gap-x-4">
              <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={peopleAscending.imageUrl} alt="" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{peopleAscending.name}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{peopleAscending.points}</p>
            </div>
          </li>
        ))}
      </ul>
    )
  }
  