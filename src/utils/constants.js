export const YOUTUBE_POPULAR_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&key=${process.env.REACT_APP_YOUTUBE_KEY}`;
export const SINGLE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=${process.env.REACT_APP_YOUTUBE_KEY}`;
