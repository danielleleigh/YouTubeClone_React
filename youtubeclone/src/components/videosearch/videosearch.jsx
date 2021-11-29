import React, { useState } from 'react';

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('')
    const searchTermHandler = (evt) => {
        evt.preventDefault()
        setSearchTerm(evt.currentTarget.value)
    }
    const onFormSubmit = (evt) => {
        evt.preventDefault()
        props.videoSearch(searchTerm)
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" placeholder="Search..." value={searchTerm} onChange={searchTermHandler} />
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;