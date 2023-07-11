import {AlbOvv,AlbCrd} from './Components';
import Nav from './Components/Navigation';
import './App.css';
import { BrowserRouter, Route, Routes ,Link} from 'react-router-dom';
import { AppBar, Container, Toolbar} from '@material-ui/core';
import AlbDet from './Components/Albumdetail';
import CreateAlbum from './Components/CreateAlbum';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Toolbar>
        <Link to="/album">Overview</Link>
        <p>  </p>
        <Link to="/Details/1"> Details</Link>
        <p>  </p>
        <Link to="/new">Add New</Link>
      </Toolbar>
      
      <Routes>
        <Route path="/" element={<Nav/>}/>
        <Route path="/album" element={<AlbOvv/>}/>
        <Route path="/alb_1" element={<AlbCrd/>}></Route>
        <Route path="/Details/:id" element={<AlbDet/>}/>
        <Route path="/new" element={<CreateAlbum/>}></Route>
      </Routes>
      <AppBar/>
      <Container>
      
      </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
