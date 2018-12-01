import React from 'react';
import VideoListItems  from './video_list_item';

const VideoList = (props) => {
    //it's better to use built in map method to iteratie trough array than "for" loop.
   const videoItems= props.videos.map((video)=>{
        return <VideoListItems
            onVideoSelect={props.onVideoSelect}
            key= {video.etag}
            video = {video}/>
    });

    return (
        // use map method to iteratite through list of movies
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;