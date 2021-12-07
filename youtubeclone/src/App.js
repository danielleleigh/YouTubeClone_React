import {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'
import SearchBar from './components/videosearch/videosearch';
import DisplaySearchResults from './components/DisplaySearchResults/DisplaySearchResutls';
import DisplayRelatedResults from './components/DisplayRelatedResults/DisplayRelatedResults';
import DisplayComments from './components/DisplayComments/DisplayComments';
import DisplayVideo from './components/videodisplay/videodisplay';
import Comment from './components/Comment/Comment';

function App() {

  const [videoSearchResults, setVideoSearchResults] = useState([])
  const [videoRelatedResults, setRelatedResults] = useState([])
  const [currentVideoId, setCurrentVideo] = useState(["gV_i61_U79U"])
                                                                 

  const videoSearch = async (searchTerm) => {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=5&key=AIzaSyC4nyDlyvfXhvQ3HURLJstUMoVybd3rAJM`);
    setVideoSearchResults(response.data.items)
    // console.log(response.data.items)
}    

  const relatedVideo = async () => {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${currentVideoId}&type=video&maxResults=5&key=AIzaSyC4nyDlyvfXhvQ3HURLJstUMoVybd3rAJM`);
    setRelatedResults(response.data.items)
    console.log(response.data.items)
  }

  

  const setVideo = (videoId) => {
    setCurrentVideo(videoId)
    relatedVideo()
  }

useEffect(()=> {
  relatedVideo();
},[])

  // let url = `https://www.youtube.com/embed/${currentVideoId}?autoplay=1&origin=http://example.com`

  return (
    <div>
      <div>
        <img id="logo" src='/Users/sonyabrazell/Desktop/devcodecamp/youtube_clone/YouTubeClone_React/youtubeclone/src/static/youtube-logo-11609383902z56yosfap9.png' alt="logo"></img>
      </div>
      <h1>Meowy Christmas from Youtube</h1>
      <SearchBar videoSearch={videoSearch} />
      <DisplaySearchResults setVideo={setVideo} videoSearchResults={videoSearchResults}/>
          <container>
            <row>
              <column>
                <div className="columnA">
                <iframe title="youtube video" id="ytplayer" type="text/html" width="640" height="360"
                      src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1&origin=http://example.com`}
                      frameBorder="0"></iframe>          
          <DisplayComments videoId={currentVideoId}/>
          <Comment currentVideoId={currentVideoId}/>
                </div>
                </column>
              <column>
                <div className="columnB">
                <DisplayRelatedResults relatedVideo={relatedVideo} setVideo={setVideo} videoRelatedResults={videoRelatedResults}/>
                </div>
              </column>
              </row>
          </container>
          <div>
          </div>
    </div>

  );
}

export default App;
