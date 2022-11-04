import logo from './logo.svg';
import './App.css';
import LeftSidebar from './components/leftSidebar/LeftSidebar';
import RightSidebar from './components/rightSidebar/RightSidebar';
import Modal from './components/modal/Modal';
import Calendar1 from './components/calendar/Calendar';

function App() {
  return (
    <div className="App">
      <LeftSidebar />
      <RightSidebar />

    </div>
  );
}

export default App;
