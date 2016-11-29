import React, {Component} from 'react';
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
            <div>
                <input
                    value={this.state.query}
                    onChange={event => this.setState({query: event.target.value})}/>
            </div>
        )
    }
}

export default SearchBar;
