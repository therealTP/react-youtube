import React, { Component } from 'react';

// create new class called search bar
// give it access to all functionality that React.component has
class SearchBar extends Component {
  // every class-based react component needs a render method
  render() {
    // return JSX
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
    // onChange event, change state value
    // ONLY USE setState() method to modify state
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  constructor(props) {
    super(props);
    // create state of instance by assigning object to this.state
    // term will be updated each time user changes search term
    this.state = { term: 'California' };
  }
}

// export component from file
// any file that imports this file will get SearchBar component
export default SearchBar;
