import React from "react";

function InfoBar(props) {

    return (

        <header className="infoBar" style={props.color}>
            <h1>Clicky Crab</h1>
            <p>{props.message}</p>
            <div>
                <p>Score: {props.score}   |   Top Score: {props.topScore}</p>
            </div>
        </header>

    );
}

export default InfoBar;