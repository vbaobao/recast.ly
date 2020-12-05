import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: [],
      currentVideo: {}
    };
    this.changeVideoOnClick = this.changeVideoOnClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    //this.debounceHandleSearch = this.debounceHandleSearch.bind(this);
    this.options = { key: YOUTUBE_API_KEY };
  }

  changeVideoOnClick(videoObj) {
    this.setState({ currentVideo: videoObj });
  }

  handleSearch(value) {
    // on change in input
    // make a call to this.props.searchYouTube
    // pass the value into options
    // apply debounce
    console.log(value);    
    this.options.query = value; 
    console.log(this.options.query);
    this.props.searchYouTube(this.options, this.updatePageData.bind(this));

  }

  updatePageData(data) {
    this.setState({
      videoList: data,
      currentVideo: data[0]
    });
  }
  
  componentDidMount() {
    this.props.searchYouTube(this.options, this.updatePageData.bind(this));
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search options={this.options} handleSearch={ _.debounce((value) => this.handleSearch(value), 500, {leading: true}) } /></div>
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
