import {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'
import DisplayVideo from './components/videodisplay/videodisplay';
import SearchBar from './components/videosearch/videosearch';

function App() {

  const [video, setVideo] = useState([])

  const videoSearch = async => () => {
    let response = axios.get("https://www.googleapis.com/youtube/v3/search?q=${props.searchTerm}&key=AIzaSyCTsMnnqzkaOvW4zYnh6rCJAUH2hXP0DbA");
    setVideo(response.data.items)
    console.log(response.data.video)
}    
  const [videos, setRelated] = useState([])

  const relatedVideo = async => () => {
    let response = axios.get("https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${video}&type=video&key=AIzaSyCTsMnnqzkaOvW4zYnh6rCJAUH2hXP0DbA");
    setRelated(response.data.items)
    console.log(response.data.videos)
  }

  return (
    <div>
      <h1>Meowy Christmas from Youtube</h1>
      <SearchBar onClick={videoSearch}/>
          <container>
            <row>
              <column>
                <div className="columnA">
                <iframe title="youtube video" id="ytplayer" type="text/html" width="640" height="360"
                      src="https://www.youtube.com/embed/gV_i61_U79U?autoplay=1&origin=http://example.com"
                      frameborder="0"></iframe>
                </div>
                </column>
              <column>
              <div className="columnB">
                {console.log("Render happened!!!!!!!")}
                  <button onClick={relatedVideo}>Click me</button>
                  {video.map(video =>
                    <DisplayVideo video={video} flamingo={"Word"}></DisplayVideo>
                    )}
                </div>
              </column>
              </row>
          </container>
    </div>

  );
}

export default App;
