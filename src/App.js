import logo from './logo.svg';
import './App.css';
// import Game from './component/game/Game.js';
import Five from './component/game/size/five/Five.js';
import Six from './component/game/size/six/Six.js';
import Seven from './component/game/size/seven/Seven.js';
import Eight from './component/game/size/eight/Eight.js';
import Nine from './component/game/size/nine/Nine.js';
import Eleven from './component/game/size/eleven/Eleven.js';
import Thirteen from './component/game/size/thirteen/Thirteen.js';
import Fiveteen from './component/game/size/fiveteen/Fiveteen.js';
import Nineteen from './component/game/size/nineteen/Nineteen.js';
import app from "./App.css";
import Start from './component/start/Start.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  function ok() {
    console.log('51')
  }
  return (
    <div>
      <h1>Го</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start/>}/>
          {/* <Route path="/Game" element={<Game/>}/> */}
          <Route path="/Five" element={<Five/>}/>
          <Route path="/Six" element={<Six/>}/>
          <Route path="/Seven" element={<Seven/>}/>
          <Route path="/Eight" element={<Eight/>}/>
          <Route path="/Nine" element={<Nine/>}/>
          <Route path="/Eleven" element={<Eleven/>}/>
          <Route path="/Thirteen" element={<Thirteen/>}/>
          <Route path="/Fiveteen" element={<Fiveteen/>}/>
          <Route path="/Nineteen" element={<Nineteen/>}/>
        </Routes>
         
          
        
      </BrowserRouter>
    </div>
   
  );
}

export default App;