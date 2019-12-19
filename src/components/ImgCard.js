import React from "react";

function ImgCard(props) {
    const url = "assets/click_images/" + props.src;
    return (
        <div className="ImgCard">
            <img src={url} alt={props.src} />
        </div>
    );
}

export default ImgCard;