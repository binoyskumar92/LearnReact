import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import VideoDetail from './components/video_detail'
import VideoList from './components/video_list'
import YTSearch from 'youtube-api-search'


const API_KEY = "AIzaSyAfv7Z-f7K-oFIr3v1bcOozXFfqgwDP56Q";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {videos: []};
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({videos})
        })
        this.state = {videos: []};
    }

    render() {
        return (
            <div className="panel panel-default">
                <SearchBar/>
                <VideoDetail video={this.state.videos[0]}/>
                <VideoList videos={this.state.videos}/>
            </div>);
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
