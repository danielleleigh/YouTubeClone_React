import React from "react";
import { useState, useEffect} from 'react'
import axios from "axios";

const DisplayComments = (props) =>{
    const [comments,SetComments]=useState([])
    const [reply, setReply] = useState('')

    useEffect(()=>{
        getComment()
    },[props.videoId])

    const getComment = async () => {
        let response = await axios.get(`http://127.0.0.1:8000/comment/${props.videoId}/`);
        SetComments(response.data)
        console.log(comments)    
    }
    
    const handleChange = (event) => {
        setReply(event.target.name);
    }

    const handleSubmit = async(e, comment_id) => {
        e.preventDefault()
        let newReply = {
            comment:comment_id,
            reply:reply,
        }
        await axios.post('http://127.0.0.1:8000/reply/', newReply)
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
                            <div>
                                <tr>
                                    <td>{element.comment}</td>
                                    <td>likes: {element.like}</td>
                                    <td>dislikes: {element.dislike}</td>  
                                </tr>
                                <td>
                                    <form onSubmit = {(e) => handleSubmit(e, element.id)}>
                                        <input onChange={handleChange} name='reply'/>
                                        <button type = 'submit'>Reply</button>
                                    </form>
                                </td>
                            </div>
                        )
                    })}
                </tr>  
            </tbody>
        </table>
        </React.Fragment>
)}      

export default DisplayComments;