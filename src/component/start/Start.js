import React from "react";
import start from "./start.css";
import { useLocation, Link} from "react-router-dom";


function Start({amount}) {
    const choise = (event) => {
        let parent = event.target.parentNode;
        let choise = Array.from(parent.parentNode.children);
        choise.forEach(element => {element.classList.remove('choise')});
        parent.classList.add('choise');
        
        amount(event.target.attributes.datatype.value)
    }
    const pick = (event) => {
        let parent = event.target.parentNode;
        let pick = Array.from(parent.children);
        pick.forEach(element => {element.classList.remove('pick')});
        event.target.classList.add('pick');
    }
    // let url = useLocation();
    // console.log(url)
    return(
    
        <div className="box">
            <form>
                <h2>Выберите цвет</h2>
                <p>1-го хода</p>
                <div className="colors">
                    <div className="choise">
                        <button id="white" type="button" datatype="1" onClick={choise}></button>
                    </div>
                    <div>
                        <button id="black"  type="button" datatype="0" onClick={choise}></button>
                    </div>
                </div>
            </form>
            <div className="field">
                <h2>Размер поля</h2>
                <div>
                    <button onClick={pick}><Link to="/Five">5x5</Link></button>
                    <button onClick={pick}><Link to="/Six">6x6</Link></button>
                    <button onClick={pick}><Link to="/Seven">7x7</Link></button>
                    <button onClick={pick}><Link to="/Eight">8x8</Link></button>
                    <button onClick={pick}><Link to="/Nine">9x9</Link></button>
                    <button onClick={pick}><Link to="/Eleven">11x11</Link></button>
                    <button onClick={pick}><Link to="/Thirteen">13x13</Link></button>
                    <button onClick={pick}><Link to="/Fiveteen">15x15</Link></button>
                    <button onClick={pick}><Link to="/Nineteen">19x19</Link></button>
                </div>
            </div>
        </div>
    )
};

export default Start;