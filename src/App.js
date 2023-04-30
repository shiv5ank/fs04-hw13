import { Routes, Route } from 'react-router-dom'
import './App.css';
import Catlog from './Components/Catlog';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Catlog /> } />
      </Routes>
          </div>
          );
        }
        export default App;
          