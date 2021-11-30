import React from "react";
import { useState, useEffect} from 'react'
import axios from "axios";

const DisplayComments = (props) =>{
    const [comments,SetComments]=useState([])

    useEffect(()=>{
        getComment()
    },[])

    const getComment = async () => {
        let response = await axios.get(`http://127.0.0.1:8000/comment/${props.videoId}/`);
        SetComments(response.data)
        console.log(comments)    
    }

    return(
        <React.Fragment>
        <table>
            <thead>
                <td>Comments</td>
            </thead>
            <tbody>
                <tr>
                    {comments.map((element)=> {
                        return(
                            <React.Fragment>
                                <tr>
                                    <td>{element.comment}</td>
                                    <td>likes: {element.like}</td>
                                    <td>dislikes: {element.dislike}</td>  
                                </tr>
                            </React.Fragment>
                        )
                    })}
                </tr>  
            </tbody>
        </table>
        </React.Fragment>
)}      

export default DisplayComments;