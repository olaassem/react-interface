import { BiCalendar } from 'react-icons/bi';
import AddAppt from './components/AddAppt';
import ApptInfo from './components/ApptInfo';
import Search from './components/Search';
import data from './data.json'

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-8">
        <BiCalendar className="inline-block align-top mr-4" /> 
        My Appointments
      </h1>
      <AddAppt />
      <Search />

      <ul className="divide-y divide-gray-200">
        {data.map( appt => <ApptInfo key={appt.id} appt={appt} /> )}
      </ul>
    </div>
  );
}

export default App;
