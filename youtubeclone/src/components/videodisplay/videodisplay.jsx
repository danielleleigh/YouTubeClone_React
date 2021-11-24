import React from "react";
import axios from 'axios';

function DisplaySong (props){


    return (
        // <div>
        //     <span>Track Name: {props.song.trackName}</span>
        //     <span> Track Album: {props.song.collectionName}</span>
        //     <span> Track Release Date: {props.song.releaseDate}</span>
        //     <span> Track Artist: {props.song.artistName}</span>
        // </div>
        <div>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
                src="https://www.youtube.com/embed/gV_i61_U79U?autoplay=1&origin=http://example.com"
                frameborder="0"></iframe>
        </div>
    )
}

export default DisplaySong;

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/gV_i61_U79U" title="YouTube video player" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}