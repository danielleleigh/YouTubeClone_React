import React, { useEffect, useState } from "react";


function Comment(props) {
    const [comment,setComment] = useState();

    

    const handleChange = (event) => {
       setComment({
           [event.target.name]: event.target.value
       }); 
    }
    

    const handleSubmit
}
export default Comment;