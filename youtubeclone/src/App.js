import {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'
import DisplaySong from './components/videodisplay/videodisplay';
import SearchBar from './components/videosearch/videosearch';


function App() {

  const [music, setMusic] = useState([])
  const [video, setVideo] = useState('gV_i61_U79U')

  const itunesAPICall = async () =>{
    let response = await axios.get("https://itunes.apple.com/search?term=radiohead&media=music&limit=20");
    console.log(response.data)
    setMusic(response.data.results)
  }

  // const [videos, setVideos] = useState([])

  // const youtubeAPICall = async () =>{
  //   let response = await axios.get("https://itunes.apple.com/search?term=radiohead&media=music&limit=20");
  //   console.log(response.data)
  //   setVideo(response.data.results)
  // }

  const filterSongs = (termToFilter) =>{
    let filteredResults = this.state.library.filter(function(el){
      if(el.title.includes(termToFilter));
      {
        return true;
      }
    })
    this.useState({
      library: filteredResults
    })
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

    // <div style="width: 80%; float:right">
    //   <iframe id="ytplayer" type="text/html" width="640" height="360"
    //         src="https://www.youtube.com/embed/gV_i61_U79U?autoplay=1&origin=http://example.com"
    //         frameborder="0"></iframe>
    // </div>
    // </div>

/* <div>
<h1>Meowy Christmas from Youtube</h1>
    <container>
      <row>
        <column>
          <div className="columnA">
          <iframe id="ytplayer" type="text/html" width="640" height="360"
                src="https://www.youtube.com/embed/gV_i61_U79U?autoplay=1&origin=http://example.com"
                frameborder="0"></iframe>
          </div>
          </column>
        <column>
        <div className="columnB">
          {console.log("Render happened!!!!!!!")}
            <button onClick={itunesAPICall}>Click me</button>
            {music.map(song =>
              <DisplaySong song={song} flamingo={"Word"}></DisplaySong>
              )}
          </div>
        </column>
        </row>
    </container>
</div> */

  <div>
    <h1>Meowy Christmas from Youtube</h1>
        <SearchBar/>
         <container>
          <row>
            <column>
              <div className="columnA">
              {/* <iframe id="ytplayer" type="text/html" width="640" height="360"
                    src="https://www.youtube.com/embed/gV_i61_U79U?autoplay=1&origin=http://example.com"
                    frameborder="0"></iframe> */}
                <button onClick={itunesAPICall}>Click me</button>
                <iframe id="ytplayer" type="text/html" width="640" height="360"
                    src="https://www.youtube.com/embed/gV_i61_U79U?autoplay=1&origin=http://example.com"
                    frameborder="0"></iframe>
                    
              </div>
              </column>
            <column>
            <div className="columnB">
              {console.log("Render happened!!!!!!!")}
                <button onClick={itunesAPICall}>Click me</button>
                {music.map(song =>
                  <DisplaySong song={song} flamingo={"Word"}></DisplaySong>
                  )}
              </div>
            </column>
            </row>
        </container>
    </div>

  );
}

export default App;
