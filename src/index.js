import _ from 'lodash';
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAFJeNISYs89-n-hUvNrdqQNb1ogrNfZJQ'

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        }
        this.videoSearch('Navi')
    }
    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (data) => {
            this.setState({ 
                videos: data,
                selectedVideo: data[0]
            }) // key and variable are the same ({ videos }). change data to videos
        })
    }


    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300 )
        return(
            <div>
                <SearchBar onSearchTermChange ={videoSearch}/>
                <VideoDetail video ={this.state.selectedVideo}/>
                <VideoList 
                onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                videos = {this.state.videos}/>
            </div>
        )
    }
}


ReactDOM.render(
<App />,
document.querySelector('.container')
)