import React from "react";

function ImgCard(props) {
    const url = "assets/click_images/" + props.src;
    return (

        <div className="col-4">
            <img className="clickImage" src={url} alt={props.src} />
        </div>

    );
}

export default ImgCard;