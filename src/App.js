import { BiCalendar } from 'react-icons/bi';
import AddAppt from './components/AddAppt';
import Search from './components/Search';

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-8">
        <BiCalendar className="inline-block align-top mr-4" /> 
        My Appointments
      </h1>
      <AddAppt />
      <Search />
    </div>
  );
}

export default App;
