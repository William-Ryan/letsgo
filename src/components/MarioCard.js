import React from "react";

const MarioCard = props => {
    return (
        <div>
            <div className="card">
                <div>
                    <img src={props.mar.image}></img>
                </div>
                <h2>{props.mar.amiiboSeries}</h2>
                <h3>{props.mar.character}</h3>
                <h3>{props.mar.gameSeries}</h3>
            </div>
        </div>
    )
}

export default MarioCard;