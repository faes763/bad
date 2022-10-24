import React from "react";
import './nineteen.css'


function Nineteen() {

    let colors; 
    let amountBlack = 0;
    let amountWhite = 0;
    let oy = 0;
    let area = [ 
        ["", "", "", "", "", "", "","","","","","","","","","","","","","",""],
        ["", "", "", "", "", "", "","","","","","","","","","","","","","",""],
        ["", "", "", "", "", "", "","","","","","","","","","","","","","",""],
        ["", "", "", "", "", "", "","","","","","","","","","","","","","",""],
        ["", "", "", "", "", "", "","","","","","","","","","","","","","",""],
        ["", "", "", "", "", "", "","","","","","","","","","","","","","",""],
        ["", "", "", "", "", "", "","","","","","","","","","","","","","",""],
        ["", "", "", "", "", "", "","","","","","","","","","","","","","",""],
        ["", "", "", "", "", "", "","","","","","","","","","","","","","",""],
        ["", "", "", "", "", "", "","","","","","","","","","","","","","",""],
        ["", "", "", "", "", "", "","","","","","","","","","","","","","",""],
        ["", "", "", "", "", "", "","","","","","","","","","","","","","",""],
        ["", "", "", "", "", "", "","","","","","","","","","","","","","",""],
        ["", "", "", "", "", "", "","","","","","","","","","","","","","",""],
        ["", "", "", "", "", "", "","","","","","","","","","","","","","",""],
        ["", "", "", "", "", "", "","","","","","","","","","","","","","",""],
        ["", "", "", "", "", "", "","","","","","","","","","","","","","",""],
        ["", "", "", "", "", "", "","","","","","","","","","","","","","",""],
        ["", "", "", "", "", "", "","","","","","","","","","","","","","",""],
        ["", "", "", "", "", "", "","","","","","","","","","","","","","",""]
    ];
    function What(color,beside,border,connect,score) {
        this.color = color;
        this.beside = beside;
        this.border = border;
        this.connect = connect;
        this.score = score;
    }

    let turn = 0;
    const box = (event)=>{

    let element = event.target; 
    let node = element.parentNode; 
   
    let i = ([...node.children].indexOf(element)); 
    let p = [...node.parentNode.children].indexOf(element.parentNode) 
    let span = document.createElement('span'); 
    
    console.log(area)
    if(turn%2 == 1 && area[p][i] == "") {
        turn++; 
        colors = "white"; 
        area[p][i] = new What('white', { 
            top: "", 
            bottom: "", 
            right: "", 
            left: "", 
        }, false, false,false);
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
        if (area[p][i].connect && area[p][i].border) {
            
            console.log(white());
            function white() {
                for (let g = 0; g <= [...node.parentNode.children].length - 1; g++) {

                    // console.log(amountBlack)
                    for(let l = 0; l <= [...node.children].length - 1; l++) {
                        if (area[g][l].border) oy++;
                        if(oy==2) return amountWhite;
                        // console.log(area[g][l+1].color)
                        if(typeof area[g][l] == "object" && area[g][l].color == "white") {
                            break;   
                        }
                        else if(typeof area[g][l] == "string" && area[g][l].color != "white") amountWhite++;
                    }
                }
            } 
        } 
 
 
    }else if (area[p][i] =="") {
        turn++; 
        colors = "black"; 
        area[p][i] = new What('black', { 
                                top: "", 
                                bottom: "", 
                                right: "", 
                                left: "", 
                            }, false, false,false); 
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
        // console.log(area[p + 1][i], area[p][i + 1], area[p][i - 1], area[p - 1][i]) 
        
 
        if (area[p][i].connect && area[p][i].border) {
            
            console.log(ok());
            function ok() {
                for (let g = 0; g <= [...node.parentNode.children].length - 1; g++) {

                    // console.log(amountBlack)
                    for(let l = 0; l <= [...node.children].length - 1; l++) {
                       
                        if (area[g][l].border) oy++;
                        if(oy==2) return amountBlack;
                        // console.log(area[g][l+1].color)
                        if(typeof area[g][l] == "object" && area[g][l].color == "black") {
                            break;   
                        }
                        else if(typeof area[g][l] == "string" && area[g][l].color != "black") amountBlack++;
                    }
            }
           
                
                // console.log(ok)
            } 
    
 
 
 
 
        } 
      
    } 
        if(event.target.children.length <= 0 && event.target.nodeName == "DIV") {
            event.target.appendChild(span).classList.add(colors)
        }
    }  
    return (
        <div className='container' onClick={box}>
            <div className='row'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='row'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='row'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='row'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='row'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='row'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='row'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='row'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='row'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='row'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='row'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='row'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='row'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='row'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='row why'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='row'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
export default Nineteen;