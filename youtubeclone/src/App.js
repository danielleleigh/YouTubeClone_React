import {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'
import SearchBar from './components/videosearch/videosearch';
import DisplaySearchResults from './components/DisplaySearchResults/DisplaySearchResutls';
import DisplayRelatedResults from './components/DisplayRelatedResults/DisplayRelatedResults';


function App() {

  const [videoSearchResults, setVideoSearchResults] = useState([])
  const [videoRelatedResults, setRelatedResults] = useState([])
  const [currentVideoId, setCurrentVideo] = useState(["gV_i61_U79U"])

  const videoSearch = async (searchTerm) => {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=5&key=AIzaSyD-QAy29NHPhPRDswlccdKHI83-iWmc8oc`);
    setVideoSearchResults(response.data.items)
    // console.log(response.data.items)
}    

  const relatedVideo = async () => {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${currentVideoId}&type=video&maxResults=5&key=AIzaSyD-QAy29NHPhPRDswlccdKHI83-iWmc8oc`);
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

  let url = `https://www.youtube.com/embed/${currentVideoId}?autoplay=1&origin=http://example.com`

  return (
    <div>
      <h1>Meowy Christmas from Youtube</h1>
      <SearchBar videoSearch={videoSearch} />
      <DisplaySearchResults setVideo={setVideo} videoSearchResults={videoSearchResults}/>
          <container>
            <row>
              <column>
                <div className="columnA">
                <iframe title="youtube video" id="ytplayer" type="text/html" width="640" height="360"
                      src={url}
                      frameBorder="0"></iframe>
                </div>
                </column>
              <column>
                <div className="columnB">
                <DisplayRelatedResults relatedVideo={relatedVideo} setVideo={setVideo} videoRelatedResults={videoRelatedResults}/>
                </div>
              </column>
              </row>
          </container>
          <Comment videoId={videoId}/>
    </div>

  );
}

export default App;
