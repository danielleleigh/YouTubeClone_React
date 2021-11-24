import React from "react";
import axios from 'axios';

function DisplaySong (props){


    return (
        <div>
            <span>Track Name: {props.song.trackName}</span>
            <span> Track Album: {props.song.collectionName}</span>
            <span> Track Release Date: {props.song.releaseDate}</span>
            <span> Track Artist: {props.song.artistName}</span>
        </div>
    )
}

export default DisplaySong;