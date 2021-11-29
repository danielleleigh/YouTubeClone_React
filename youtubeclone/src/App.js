import {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'
import SearchBar from './components/videosearch/videosearch';
import DisplaySearchResults from './components/DisplaySearchResults/DisplaySearchResutls';


function App() {

  const [music, setMusic] = useState([])
  const [video, setVideo] = useState('gV_i61_U79U')

function App() {

  const [videoSearchResults, setVideoSearchResults] = useState([])
  const [relatedResults, setRelatedResults] = useState([])
  const [currentVideoId, setCurrentVideo] = useState(["gV_i61_U79U"])

  const videoSearch = async (searchTerm) => {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=5&key=AIzaSyCTsMnnqzkaOvW4zYnh6rCJAUH2hXP0DbA`);
    setVideoSearchResults(response.data.items)
    // console.log(response.data.items)
}    

  const relatedVideo = async () => {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${currentVideoId}&type=video&maxResults=5&key=AIzaSyCTsMnnqzkaOvW4zYnh6rCJAUH2hXP0DbA`);
    setRelatedResults(response.data.items)
    console.log(response.data.items)
  }

  const videoPlay = async () =>{
    let response = await axios.get(`https://www.youtube.com/embed/${video}?autoplay=1&origin=http://example.com`);
    console.log(response)
    setVideo('gV_i61_U79U')
    return response
  }
 
// export const KEY = '';
// export default axios.create({
//     baseURL: 'https://www.googleapis.com/youtube/v3',
// })
  return (
    // <div>
    // <div style="width: 20%; float:left">
    //   {console.log("Render happened!!!!!!!")}
    //     <button onClick={itunesAPICall}>Click me</button>
    //     {music.map(song =>
    //       <DisplaySong song={song} flamingo={"Word"}></DisplaySong>
    //       )}
    // </div>

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
                {console.log("Render happened!!!!!!!")}
                
                    )}
                </div>
              </column>
              </row>
          </container>
    </div>

  );
}

export default App;
