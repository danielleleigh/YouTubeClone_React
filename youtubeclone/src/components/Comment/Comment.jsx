import React, { useEffect, useState } from "react";
import axios from "axios";


const Comment = (props) => {
    const [comment,setComment] = useState('');
    const [video, setVideo] = useState(props.currentVideoId);

    

    const handleChange = (event) => {
       setComment(event.target.value); 
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault()
        let newComment = {
            comment:comment,
            video_id:video,
            like:0,
            dislike:0,
        }
        await axios.post('http://127.0.0.1:8000/comment/', newComment)
    }

    return(
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input onChange={handleChange} value = {comment}/>
                <button type='submit'>Comment</button>
            </form>
        </div>
    )

}
export default Comment;