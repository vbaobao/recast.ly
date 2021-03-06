//import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => {
  const videos = props.videos;
  const videoItems = videos.map((video) =>
    <VideoListEntry video={video} changeVideo={props.changeVideo} />
  );

  return (
    <div className="video-list">
      {videoItems}
    </div>
  );
};


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
