import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Navbar from './components/Navbar';
import "./styles/tablet.css"
import "./styles/mobile.css"
import SearchPage from './pages/SearchPage';
import Profile from './pages/Profile';
import SingleNote from './pages/SingleNote';
import EditNote from './pages/EditNote';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ImportantNotes from './pages/ImportantNotes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/searchPage' element={<SearchPage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signUp' element={<SignUpPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/importantNotes' element={<ImportantNotes />} />
          <Route path='/singleNote/:id' element={<SingleNote />} />
          <Route path='/editNote/:id' element={<EditNote />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
