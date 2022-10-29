import React from "react";
import './six.css';
import Comp from "./comp/Comp.js";
import Move from '../../Move.js';

function Six({net,game,amount, ...props}) {
    //Массив в который заносятся все данные
    let area = [ 
        ["", "", "", "", "", "", ""], 
        ["", "", "", "", "", "", ""], 
        ["", "", "", "", "", "", ""], 
        ["", "", "", "", "", "", ""], 
        ["", "", "", "", "", "", ""], 
        ["", "", "", "", "", "", ""], 
        ["", "", "", "", "", "", ""] 
    ];
    net(area);
   
    return (
        <div>
            <Move amount={amount}></Move>
            <div className='container' onClick={game}>
                <Comp class="row"></Comp>
                <Comp class="row"></Comp>
                <Comp class="row"></Comp>
                <Comp class="row"></Comp>
                <Comp class="row"></Comp>
                <Comp class="row why"></Comp>
                <Comp class="row"></Comp>
            </div>
        </div>
       
    )
}
export default Six;