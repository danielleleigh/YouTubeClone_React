import React from "react";

function DisplayVideo (props){

    return (
        <div>
            <span>Video Title: {props.video.title}</span>
            <span> Video Channel: {props.video.channelId}</span>

        </div>
    )
}

export default DisplayVideo;