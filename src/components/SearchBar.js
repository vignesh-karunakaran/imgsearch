import React from "react";
class SearchBar extends React.Component {
    state = { term: ''};
    onInputChange(event) {
        this.setState({ term: event.target.value});
    }
    onSearchSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render() {
        return (
        <div className="ui segment">
            <form onSubmit={this.onSearchSubmit} className="ui form">
                <div className="field">
                <img src="/favicon.ico" className="ui small image centered feed" alt="Search icon"/>
                <input type="text" placeholder="search" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;