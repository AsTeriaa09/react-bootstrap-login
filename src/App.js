
import './App.css';
import {
  Route,
  Routes,
  BrowserRouter as Router
} from "react-router-dom";
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';

function App() {
  return (
   <>
    <Router>
    <Navbar/>
    <Routes>
    <Route path='/login' element={<LoginPage/>}/>
    </Routes>
    
      
    </Router>
   </>
  );
}

export default App;
