import React from 'react';

const VideoDetail = ({video}) => {


    //Ajax spinner.Use only when child components want a response faster than parent component can keep up with


    if (!video){
        return <div>Loading....</div>
    }

    const videoId= video.id.videoId;
    const url= `https://www.youtube.com/embed/${videoId}`; //es6 syntax

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>

            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;