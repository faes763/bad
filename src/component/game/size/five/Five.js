import React from "react";
import './five.css';
import Comp from "./comp/Comp.js";
import Move from '../../Move.js';


function Five({net,game, ...props}) {

    let area = [ 
        ["", "", "", "", "", ""], 
        ["", "", "", "", "", ""], 
        ["", "", "", "", "", ""], 
        ["", "", "", "", "", ""], 
        ["", "", "", "", "", ""], 
        ["", "", "", "", "", ""] 

    ];
    net(area);
    return (
        <div>
            <Move></Move>
            <div className='container' onClick={game}>
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
export default Five;