var searchYouTube = (options, callback) => {
  $.ajax({
    url: `https://youtube.googleapis.com/youtube/v3/search`,
    type: 'GET',
    data: {
      type: 'video',
      videoEmbeddable: true,
      part: 'snippet',
      maxResults: options.max || 5,
      q: options.query || 'react',
      key: options.key
    },
    contentType: 'application/json',
    success: function(response) {
      console.log(response);
      callback(response.items);
    },
    error: function(error) {
      console.error('YoutubeAPI: Failed to fetch', error);
    }
  });
};

export default searchYouTube;

// https://www.googleapis.com/youtube/v3/search