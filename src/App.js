import {AlbOvv,AlbCrd} from './Components';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppBar, Container, Toolbar,Link} from '@material-ui/core';
import AlbDet from './Components/Albumdetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Toolbar>
        <a href='/album'>album </a>
        <a>__</a>
        <a href="/Details/1"> details/1</a>
      </Toolbar>
      <AppBar/>
      <Container>
      <Routes>
        <Route path="/" element={<p>Them</p>}/>
        <Route path="/album" element={<AlbOvv/>}/>
        <Route path="/alb_1" element={<AlbCrd/>}></Route>
        <Route path="/Details/:id" element={<AlbDet/>}/>
      </Routes>
      </Container>
      <Link href="album"> Go to albums?</Link>
      </BrowserRouter>
    </div>
  );
}

export default App;
