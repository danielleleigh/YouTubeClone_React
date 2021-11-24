import React, { useState, Component } from 'react';


// function SearchBar(props) {
//     return (
//         <div className="searchBar">
//         <input type='text' name='search' value = {props.termToFilter} onChange={props.handleChange}/>
//         <button type= 'submit'  onClick={()=>{props.filterSongs(" ")}}>search</button>
//         </div>
//     )
// }

// export default SearchBar;

// export const videoSearch = async => () => {
//     let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=skiing&key=AIzaSyCTsMnnqzkaOvW4zYnh6rCJAUH2hXP0DbA");
//     console.log(response.data)
    
// }

// return (
//     <div>
//         <form  onSubmit={onFormSubmit}>
//             <div className="field">
//                 <label>Video Search</label>
//                 <input type="text" placeholder="Search..." value={searchTerm} onChange={searchTermHandler} />
//             </div>
//         </form>
//     </div>
// )



const SearchBar = ({onSearchSubmit}) => {
    const [searchTerm, setSearchTerm] = useState('')
    const searchTermHandler = (evt) => {
        evt.preventDefault()
        setSearchTerm(evt.currentTarget.value)
    }
    const onFormSubmit = (evt) => {
        evt.preventDefault()
        onSearchSubmit(searchTerm)
    }
    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" placeholder="Search..." value={searchTerm} onChange={searchTermHandler} />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;