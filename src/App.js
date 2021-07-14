import { useState, useEffect, useCallback } from 'react';
import { BiCalendar } from 'react-icons/bi';
import AddAppt from './components/AddAppt';
import ApptInfo from './components/ApptInfo';
import Search from './components/Search';

function App() {
  const [appts, setAppts] = useState([]);

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
      <AddAppt />
      <Search />

      <ul className="divide-y divide-gray-200">
        {appts.map( appt => (
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
