import React from "react";

function ImgCard(props) {
    const url = "assets/click_images/" + props.src;
    return (

        <img className="clickImage col-3" src={url} alt={props.src} />

    );
}

export default ImgCard;