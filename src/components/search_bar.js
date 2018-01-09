import React, { Component } from 'react';

//Functional Component - Same result as the Class Component below

//const SearchBar = () => {
//  return <input />;
//};


//Class Component
class SearchBar extends Component {

  //How to define state in a class based component
  //constructor is the only method called automatically when an instance of a class is created
  constructor(props){
    super(props);

    this.state = { term: '' };
  }


  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  };

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
