import React from "react";
import './move.css';
function Move(props) {
    return(
        <div className="cards">
            <div className="card">
                <div>
                    <h1>Black</h1>
                    <h3>Захвачено фишек </h3>
                    <span className="amountBlack">0</span>
                </div>
                
                <span className="chip"></span>

               
            </div>
            <div className="card">
                <div>
                    <h1>White</h1>
                    <h3>Захвачено фишек </h3>
                    <span className="amountWhite">0</span>
                </div>
                <span className="chip white"></span>
                
            </div>
        </div>
    )
}
export default Move;