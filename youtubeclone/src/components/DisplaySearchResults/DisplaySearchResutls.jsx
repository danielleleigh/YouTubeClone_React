import React from "react";

const DisplaySearchResults = (props) => {
    return (
        <React.Fragment>
            <table>
                <thead>
                    <td>Search Results</td>
                </thead>
                <tbody>
                    <tr>
                        {
                            props.videoSearchResults.map((video) => {
                                return(
                                    <React.Fragment key={video.id.videoId}>
                                    <tr>
                                        <td>{video.snippet.title}</td>
                                        <td>{video.snippet.description}</td>
                                        <td>
                                            <img onClick={() => { props.setVideo(video.id.videoId) }}
                                            src={video.snippet.thumbnails.default.url}
                                            alt="A Thumbnail" />
                                        </td>
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