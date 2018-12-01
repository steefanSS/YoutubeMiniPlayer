import _ from 'lodash';
import React ,{Component}from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'

const API_KEY='AIzaSyAUJ9toWQijRAWVHqzzUeT8nrrZvbwfS2w'; //youtube API

//Create a new component this should produce some HTML



class App extends Component{
    constructor(props){
        super(props);
        this.state={
            videos:[],
            selectedVideo:null
        };

        this.videoSearch('surfboards');
    }



    videoSearch (term){
        YTSearch({key:API_KEY, term:term,maxResults:6},(videos) => {
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            });
        });
    };


    render (){
        //essentially we are throttling search term, by using debounce. Reason is to provide seemless and fluent
        //experience when we are searching for new content

        const videoSearch=_.debounce((term)=> {this.videoSearch(term)},600)

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})} //same as selectedVideo:selectedVideo
                    videos = {this.state.videos}/>
            </div>
        );
    }
};

//This take component's generated HTML and put it on the page (in the DOM)
//We need to pass an instance of App component and pass it to to ReactDOM.render
//'container' is where we tell DOM where to display content (index.html)

ReactDOM.render(<App/>, document.querySelector('.container'));
