import React from "react";
import './nine.css';
import Comp from "./comp/Comp"
import Move from '../../Move.js';


function Nine({net,game, ...props}) {

    let area = [ 
        ["", "", "", "", "", "", "","","",""], 
        ["", "", "", "", "", "", "","","",""], 
        ["", "", "", "", "", "", "","","",""], 
        ["", "", "", "", "", "", "","","",""], 
        ["", "", "", "", "", "", "","","",""], 
        ["", "", "", "", "", "", "","","",""], 
        ["", "", "", "", "", "", "","","",""], 
        ["", "", "", "", "", "", "","","",""], 
        ["", "", "", "", "", "", "","","",""], 
        ["", "", "", "", "", "", "","","",""]
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
export default Nine;