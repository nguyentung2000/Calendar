import logo from './logo.svg';
import './App.css';
import LeftSidebar from './components/leftSidebar/LeftSidebar';
import RightSidebar from './components/rightSidebar/RightSidebar';

function App() {
  return (
    <div className="App">
      <LeftSidebar />
      <RightSidebar />
    </div>
  );
}

export default App;
