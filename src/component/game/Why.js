import React, {Component} from'react';

function Why({test, ...props}) {
    let area = [ 
        ["", "", "", "", "", "", ""], 
        ["", "", "", "", "", "", ""], 
        ["", "", "", "", "", "", ""], 
        ["", "", "", "", "", "", ""], 
        ["", "", "", "", "", "", ""], 
        ["", "", "", "", "", "", ""], 
        ["", "", "", "", "", "", ""] 
    ];
//    const what = ()=>{
    
//    }
   test(area)
    return(
        <div>
            <button>ok</button>
        </div>
    )
}

export default Why;