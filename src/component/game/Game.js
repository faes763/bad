import { type } from '@testing-library/user-event/dist/type';
import React, {useState} from'react';
import './game.css';
import Comp from './size/six/comp/Comp';
import Why from './Why';

function Game() {
    const ok = (what)=>{
        console.log(what)
    }
    // console.log(this.state)
    return(
        <div>
            
            <Why test={ok}></Why>
    
        </div>
    )
    
}
// class Game extends Component {
//     
    
//     state = {
//         open: true
//     }
    
//     render() {
//         const diva = this.state.open && <div>ok</div>
//         return(
//             <div>
//                 <button onClick={this.ok}>fff</button>
//                 {diva}
//             </div>
//        )
//     }
//     ok = ()=> this.setState({
//         open: !this.state.open
//     })
    
      
// }

export default Game;