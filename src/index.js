import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchbar';
import VideoList from './components/video-list';

const API_KEY = 'AIzaSyCHBwAo5sW-uPHF3WZcsH94udvnTGT34e0';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        };

        YTSearch({ key: API_KEY, term: 'h3h3' }, (videos) => {
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));