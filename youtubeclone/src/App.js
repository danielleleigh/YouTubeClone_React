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
  
    <div className="App">
      {/* {console.log("Render happened!!!!!!!")}
        <button onClick={itunesAPICall}>Click me</button>
        {music.map(song =>
          <DisplaySong song={song} flamingo={"Word"}></DisplaySong>
          )} */}

      <iframe id="ytplayer" type="text/html" width="640" height="360"
            src="https://www.youtube.com/embed/gV_i61_U79U?autoplay=1&origin=http://example.com"
            frameborder="0"></iframe>
    </div>
  );
}

export default App;
