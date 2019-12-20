import React from "react";

function ImgCard(props) {
    const url = "assets/click_images/" + props.src;
    return (

        <div className="col-4">
            <img className="clickImage" onClick={props.onClick} src={url} alt={props.src} val={props.val} />
        </div>

    );
}

export default ImgCard;