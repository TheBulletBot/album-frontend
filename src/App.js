import {AlbOvv,AlbCrd} from './Components';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppBar, Container, Toolbar,Link} from '@material-ui/core';
import AlbDet from './Components/Albumdetail';
import CreateAlbum from './Components/CreateAlbum';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Toolbar>
        <a href='/album'>Overview</a>
        <p>  </p>
        <a href="/Details/1"> Details</a>
        <p>  </p>
        <a href="/new">Add New</a>
      </Toolbar>
      <AppBar/>
      <Container>
      <Routes>
        <Route path="/" element={<p>Them</p>}/>
        <Route path="/album" element={<AlbOvv/>}/>
        <Route path="/alb_1" element={<AlbCrd/>}></Route>
        <Route path="/Details/:id" element={<AlbDet/>}/>
        <Route path="/new" element={<CreateAlbum/>}></Route>
      </Routes>
      </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
