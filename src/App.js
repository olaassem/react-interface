import { useState, useEffect, useCallback } from 'react';
import { BiCalendar } from 'react-icons/bi';
import AddAppt from './components/AddAppt';
import ApptInfo from './components/ApptInfo';
import Search from './components/Search';

function App() {
  let [appts, setAppts] = useState([]);
  let [query, setQuery] = useState("");
  let [sortBy, setSortBy] = useState("petName")
  let [orderBy, setOrderBy] = useState("desc")
  
  
   const filteredAppts = appts.filter(
    item => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      )
    }
  ).sort((a, b) => {
    let order = (orderBy === 'asc') ? 1 : -1;
    return (
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order : 1 * order
    )
  })

  const fetchData = useCallback(() => {
    fetch(`./data.json`)
      .then(response => response.json())
      .then(data => {
        setAppts(data)
      })
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-8">
        <BiCalendar className="inline-block align-top mr-4" /> 
        My Appointments
      </h1>
      <AddAppt 
        onSendAppt={newAppt => setAppts([...appts, newAppt])}
        lastId={appts.reduce((max, item) => Number(item.id) > max ? Number(item.id): max, 0)}
      />
      <Search 
        query={query}
        onQueryChange={myQuery => setQuery(myQuery)}
        orderBy={orderBy}
        onOrderByChange={orderBy => setOrderBy(orderBy)}
        sortBy={sortBy}
        onSortByChange={mySort => setSortBy(mySort)}
      />

      <ul className="divide-y divide-gray-200">
        {filteredAppts.map( appt => (
          <ApptInfo 
            key={appt.id} 
            appt={appt}
            onDeleteAppt={ apptId => setAppts(appts.filter(appt => appt.id !== apptId))}
          /> 
        )
        )}
      </ul>
    </div>
  );
}

export default App;
