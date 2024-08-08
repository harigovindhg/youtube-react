export const YOUTUBE_POPULAR_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&key=${process.env.REACT_APP_YOUTUBE_KEY}`;
export const SINGLE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=${process.env.REACT_APP_YOUTUBE_KEY}`;
export const YOUTUBE_COMMENTS_API = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=relevance&videoId=`;
export const YOUTUBE_SINGLE_VIDEO_DETAILS_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=';
export const YOUTUBE_SEARCH_SUGGEST_API = 'http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=';
export const OFFSET_LIVE_CHAT = 25;