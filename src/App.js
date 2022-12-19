import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./component/Navbar"
import Login from "./component/Login"
import Register from "./component/Register"
import Addpodcast from "./component/Addpodcast"
import PodcastCard from "./component/PodcastCard"
import Podcastmanager from "./component/Podcastmanager"
import Podcastplayer from "./component/Podcastplayer"
import Home from "./component/Home"
import Authorize from "./component/Authorize"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Login/>} path='/login'/>
      <Route element={<Register/>} path='/register'/>
      <Route element={<Addpodcast/>} path='/addpodcast'/>
      <Route element={<PodcastCard/>} path='/podcastcard'/>
      <Route element={<Podcastplayer/>} path='/podcastplayer'/>
      <Route element={<Podcastmanager/>} path='/podcastmanager'/>
     </Routes>
     </BrowserRouter>
  );
}

export default App;
