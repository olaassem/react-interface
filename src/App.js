import { BiCalendar, BiTrash } from 'react-icons/bi';
import AddAppt from './components/AddAppt';
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
        {data.map(appt => {
          return (
            <li className="px-3 py-3 flex items-start">
              <button type="button"
                className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <BiTrash /></button>
              <div className="flex-grow">
                <div className="flex items-center">
                  <span className="flex-none font-medium text-2xl text-blue-500">{appt.petName}</span>
                  <span className="flex-grow text-right">{appt.aptDate}</span>
                </div>
                <div><b className="font-bold text-blue-500">Owner:</b> {appt.ownerName}</div>
                <div className="leading-tight">{appt.aptNotes}</div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
