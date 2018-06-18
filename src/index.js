import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
const API_KEY="AIzaSyAfv7Z-f7K-oFIr3v1bcOozXFfqgwDP56Q";
const App=function() {
  return (
    <div>
    <SearchBar/>
    </div>);
}
ReactDOM.render(<App/>,document.querySelector('.container'));
