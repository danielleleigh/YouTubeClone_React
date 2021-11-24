import {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'
import DisplaySong from './components/videodisplay/videodisplay';

function App() {

  const [music, setMusic] = useState([])

  const itunesAPICall = async () =>{
    let response = await axios.get("https://itunes.apple.com/search?term=radiohead&media=music&limit=20");
    console.log(response.data)
    setMusic(response.data.results)
  }
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

<div>
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
</div>
  );
}

export default App;
