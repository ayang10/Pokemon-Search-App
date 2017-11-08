import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div className="row">
            <div className="col-sm-6 col-centered">
              <input 
                className="form-control" 
                placeholder="Search"
                onChange={event => this.onInputChange(event.target.value)}
                value={ this.state.term }  
              />
            </div>
          </div>

        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }


}

export default SearchBar;