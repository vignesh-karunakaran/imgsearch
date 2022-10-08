import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
    state = {images: []};
    onSearchSubmit = (term) => {
        term = '' ? 'car' : term;
        fetch(`https://api.unsplash.com/search/photos?query=${term}`, {
            headers: {
                'Authorization': 'Client-ID _uBeVjKBscUU5SrxahXHcju015-j9fUdK4kk-J4aJ6c'
              }
        }).then((res) => {
            res.json().then((res) => {
                console.log(res.results);
                this.setState({images: res.results});
            })
        });
    }
  
    render() {
    return (
    <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images} />
    </div>
    );
  }
};

export default App;