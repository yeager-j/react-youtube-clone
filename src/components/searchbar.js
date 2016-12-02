import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ''
        };
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.query}
                    onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        )
    }

    onInputChange(query) {
        this.setState({query});
        this.props.onSearchQueryChange(query);
    }
}

export default SearchBar;
