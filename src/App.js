import logo from './logo.svg';
import './App.css';
import Game from './component/game/Game.js';
import Five from './component/game/size/five/Five.js';
import Six from './component/game/size/six/Six.js';
import Seven from './component/game/size/seven/Seven.js';
import Eight from './component/game/size/eight/Eight.js';
import Nine from './component/game/size/nine/Nine.js';
import Eleven from './component/game/size/eleven/Eleven.js';
import Thirteen from './component/game/size/thirteen/Thirteen.js';
import Fiveteen from './component/game/size/fiveteen/Fiveteen.js';
import Nineteen from './component/game/size/nineteen/Nineteen.js';
import "./App.css";
import Start from './component/start/Start.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  let area;
  function grid(area1) {
    area = area1;
  }
  let turn = 1;
  function colorTurn(cTurn) {
    turn = cTurn;
  }
  // Фунция конструктор
  function What(color,beside,border,connect) {
    this.color = color;
    this.beside = beside;
    this.border = border;
    this.connect = connect;
  }

function beside(p, i, node) {
    // Проверка верхней стороны
    if (p == 0) { 
        area[p][i].beside.top = false; 
        area[p][i].border = true; 
    } else { 
        if (area[p - 1][i].color == undefined) { 
            area[p][i].beside.top = ""; 
        } else if (area[p - 1][i].color == colors) { 
            area[p][i].connect = true; 
            area[p - 1][i].connect = true; 
            area[p][i].beside.top = area[p - 1][i].color; 
            area[p-1][i].beside.bottom = area[p][i].color;
        } else { 
            area[p][i].beside.top = area[p - 1][i].color; 
            area[p-1][i].beside.bottom = area[p][i].color;
        } 
    } 

    // Проверка левой стороны 
    if (i == 0) { 
        area[p][i].beside.left = false; 
        area[p][i].border = true; 
    } else { 
        if (area[p][i - 1].color == undefined) { 
            area[p][i].beside.left = ""; 
        } else if (area[p][i - 1].color == colors) { 
            area[p][i].connect = true; 
            area[p][i - 1].connect = true; 
            area[p][i].beside.left = area[p][i - 1].color; 
            area[p][i-1].beside.right = area[p][i].color;
        } else { 
            area[p][i].beside.left = area[p][i - 1].color; 
            area[p][i-1].beside.right = area[p][i].color;
        } 
    } 

    // Проверка правой стороны 
    if ([...node.children].length - 1 == i) { 
        area[p][i].beside.right = false; 
        area[p][i].border = true; 
    } else { 
        if (area[p][i + 1].color == undefined) { 
            area[p][i].beside.right = ""; 
        } else if (area[p][i + 1].color == colors) { 
            area[p][i].connect = true; 
            area[p][i + 1].connect = true; 
            area[p][i].beside.right = area[p][i + 1].color; 
            area[p][i+1].beside.left = area[p][i].color;
        } else { 
            area[p][i].beside.right = area[p][i + 1].color; 
            area[p][i+1].beside.left = area[p][i].color;
        } 
    } 

    // Проверка Нижней стороны 
    if ([...node.parentNode.children].length - 1 == p) { 
        area[p][i].beside.bottom = false; 
        area[p][i].border = true 
    } else { 
        if (area[p + 1][i].color == undefined) { 
            area[p][i].beside.bottom = ""; 
        } else if (area[p + 1][i].color == colors) { 
            area[p][i].connect = true; 
            area[p + 1][i].connect = true; 
            area[p][i].beside.bottom = area[p + 1][i].color; 
            area[p+1][i].beside.top = area[p][i].color;
        } else { 
            area[p][i].beside.bottom = area[p + 1][i].color; 
            area[p+1][i].beside.top = area[p][i].color;
        } 
    } 
}
function amount(colors,node,colorA) {
  for (let g = 0; g <= [...node.parentNode.children].length - 1; g++) {
      for(let l = 0; l <= [...node.children].length - 1; l++) {
          if (area[g][l].border) oy++;
          if(oy==2) return colorA;
          if(typeof area[g][l] == "object" && area[g][l].color == colors) break;
          else if(typeof area[g][l] == "string" && area[g][l].color != colors) colorA++;
      }
  }
} 
let colors; 
let black = 0, white = 0,oy = 0;
//Что будет происходить при клике на игру
const game = (event)=>{
  if(event.target.parentNode.className == "row" || event.target.parentNode.className == "row why") {
      //Получение элемента на которого нажали
      let element = event.target; 
      //Родительский элемент
      let node = element.parentNode; 
      //Возращение индекса блока на которого нажали
      let i = ([...node.children].indexOf(element)); 
      //Возращение родительского индекса блока на которого нажали
      let p = [...node.parentNode.children].indexOf(element.parentNode) 
      
      
      
      if(turn%2 == 1 && area[p][i] == "") {
        document.querySelectorAll('.card')[1].classList.add('adoption');
        document.querySelectorAll('.card')[0].classList.remove('adoption');
          turn++; 
          colors = "white"; 
          //Добавление объекта в массив, при нажатии
          area[p][i] = new What(colors, { top: "", bottom: "", right: "", left: "", }, false, false);
          
          //Функция возращает то что находится рядом с объектом
          beside(p,i,node);

          //Тестовый счёт очков
          if (area[p][i].connect && area[p][i].border) console.log(amount(colors,node, white));
  
      }else if (area[p][i] =="") {
        document.querySelectorAll('.card')[0].classList.add('adoption');
        document.querySelectorAll('.card')[1].classList.remove('adoption');
        
          turn++; 
          colors = "black"; 
          //Добавление объекта в массив, при нажатии
          area[p][i] = new What(colors, { top: "", bottom: "", right: "", left: ""}, false, false); 

          //Функция возращает то что находится рядом с объектом
          beside(p,i,node);

          //Тестовый счёт очков
          if (area[p][i].connect && area[p][i].border) console.log(amount(colors,node, black));
      } 
      //Нужен для добавления элемента на сайт
      let span = document.createElement('span'); 
      //Добавление элемента на сайт, при клике. Проверка можно ли ставить туда блок
      if(event.target.children.length <= 0 && event.target.nodeName == "DIV") event.target.appendChild(span).classList.add(colors);
      console.log(area)
  } 
}
  let amountArray = [black,white]
  // console.log(area)
  return (
    <div>
      <h1 className='go'>Го</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start amount={colorTurn}/>}/>
          <Route path="/Game" element={<Game/>}/>
          <Route path="/Five" element={<Five game={game} net={grid}/>}/>
          <Route path="/Six" element={<Six game={game} net={grid} amount={amountArray}/>}/>
          <Route path="/Seven" element={<Seven game={game} net={grid}/>}/>
          <Route path="/Eight" element={<Eight game={game} net={grid}/>}/>
          <Route path="/Nine" element={<Nine game={game} net={grid}/>}/>
          <Route path="/Eleven" element={<Eleven game={game} net={grid}/>}/>
          <Route path="/Thirteen" element={<Thirteen game={game} net={grid}/>}/>
          <Route path="/Fiveteen" element={<Fiveteen game={game} net={grid}/>}/>
          <Route path="/Nineteen" element={<Nineteen game={game} net={grid}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;