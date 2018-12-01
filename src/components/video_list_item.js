import React from 'react';

// const video= props.video (instead of using props the object that appear has a property "video",
// so it will grab the video and declare new video)
const VideoListItems = ({video, onVideoSelect}) =>{

    const imageUrl=video.snippet.thumbnails.default.url;

    return (
        <li onClick= {()=> onVideoSelect(video)} className="list-group-item">
            <div className= "video-list-media">
                <div className= "media-left">
                    <img className="media-object" src = {imageUrl}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItems;