import {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'
import DisplayVideo from './components/videodisplay/videodisplay';
import SearchBar from './components/videosearch/videosearch';
import DisplaySearchResults from './components/DisplaySearchResults/DisplaySearchResutls';



function App() {

  const [videoSearchResults, setVideoSearchResults] = useState([])
  const [videoID, setRelated] = useState([])
  const [currentVideo, setCurrentVideo] = useState([])

  const videoSearch = async (searchTerm) => {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=5&key=AIzaSyCTsMnnqzkaOvW4zYnh6rCJAUH2hXP0DbA`);
    setVideoSearchResults(response.data.items)
    console.log(response.data.items)
}    

  const relatedVideo = async () => {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoID}&type=video&key=AIzaSyCTsMnnqzkaOvW4zYnh6rCJAUH2hXP0DbA`);
    setRelated(response.data.items)
    console.log(response.data.items)
  }

  return (
    <div>
      <h1>Meowy Christmas from Youtube</h1>
      <SearchBar videoSearch={videoSearch} />
      <DisplaySearchResults searchResults={videoSearchResults}/>
          <container>
            <row>
              <column>
                <div className="columnA">
                <iframe title="youtube video" id="ytplayer" type="text/html" width="640" height="360"
                      src="https://www.youtube.com/embed/gV_i61_U79U?autoplay=1&origin=http://example.com"
                      frameBorder="0"></iframe>
                </div>
                </column>
              <column>
              <div className="columnB">
                {console.log("Render happened!!!!!!!")}
                  <button onClick={relatedVideo}>Click me</button>
                  {/* {video.map(video => */}
                    <DisplayVideo video={videoID} flamingo={"Word"}></DisplayVideo>
                    )}
                </div>
              </column>
              </row>
          </container>
    </div>

  );
}

export default App;
