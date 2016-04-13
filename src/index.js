// find react/ react-dom library and attach to variable React/ ReactDOM
// don't need a relative path since there is only one. babel will find it
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyC77DChU2Cv8Xucx1vurqShjHmusBv1IOM';

// import components w/ relative path
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

// this creates a "class" of App components, not yet instantiated
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {videos: []};
    YTSearch({key: API_KEY, term: 'puppies'}, videos => this.setState({videos}));
    // same as this.setState({videos: videos}); matching key/val
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
};

// render an instance of the component to the DOM by wrapping in JSX tag
// second argument: where in current DOM (in index.html) to render instance of component
ReactDOM.render(<App />, document.querySelector('.container'));
