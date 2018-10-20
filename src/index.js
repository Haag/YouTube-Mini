import React, { Component } from "react";
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        }
        
        const API_KEY = 'AIzaSyAFJeNISYs89-n-hUvNrdqQNb1ogrNfZJQ'
        YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
            this.setState({ videos: data }) // key and variable are the same ({ videos }). change data to videos
        })
    }

    render() {
        return(
            <div>
                Hello
                <SearchBar />
                <VideoList videos = {this.state.videos}/>
            </div>
        )
    }
}


ReactDOM.render(
<App />,
document.querySelector('.container')
)