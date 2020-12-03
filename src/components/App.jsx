import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: exampleVideoData, //videoID as identifier
      currentVideo: exampleVideoData[0]
    };
    this.changeVideoOnClick = this.changeVideoOnClick.bind(this);
  }

  // function changeVideoOnClick() {

  //   return xx
  // }

  changeVideoOnClick() {
    console.log('hello');
    console.log(this);
    this.setState({ currentVideo: this });
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVideo} /></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.videoList} changeVideo={this.changeVideoOnClick} /></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
