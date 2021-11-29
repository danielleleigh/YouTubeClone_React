import React from "react";

const DisplaySearchResults = (props) => {
    return (
        <React.Fragment>
            <table>
                <thead>
                    <tr>Search Results</tr>
                </thead>
                <tbody>
                    <tr>
                        {
                            props.searchResults.map((video) => {
                                return(
                                    <React.Fragment>
                                    <tr>
                                        <td>{video.snippet.title}</td>
                                        <td>{video.snippet.description}</td>
                                        <button>
                                            <img onClick={() => { props.setVideo(video) }}
                                            scr={video.snippet.thumbnails.default.url}
                                            alt="A Thumbnail" />
                                        </button>
                                    </tr>
                                    </React.Fragment>
                                )
                            }
                            )
                        }
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default DisplaySearchResults;