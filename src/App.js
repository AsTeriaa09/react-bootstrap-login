
import './App.css';
import {
  Route,
  Routes,
  BrowserRouter as Router
} from "react-router-dom";
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import CreateUser from './pages/CreateUser';

function App() {
  return (
   <>
    <Router>
    <Navbar/>
    <Routes>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/profile' element={<Profile/>} />
    <Route path='/user' element={<CreateUser/>} />
    </Routes>
    
      
    </Router>
   </>
  );
}

export default App;
