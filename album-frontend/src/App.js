import logo from './logo.svg';
import {AlbOvv,AlbCrd} from './Components';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppBar, Container, Toolbar } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Toolbar>
        <a href='/api/album'>him </a>
        <a href='/alb_1'> card</a>
      </Toolbar>
      <AppBar/>
      <Container>
      <Routes>
        <Route path="/" element={<p>Them</p>}/>
        <Route path="/api/album" element={<AlbOvv/>}/>
        <Route path="/alb_1" element={<AlbCrd/>}></Route>
      </Routes>
      </Container>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
