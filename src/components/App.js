import React from "react";
import axios from "axios";


import SearchInput from "./SearchInput";


class App extends React.Component {

    onSearchSubmit = (entry) => {
        axios.get(`https://pixabay.com/api/?key=32890479-9c105d6129c482faf9ed98a32&q=${entry}&image_type=photo`)

    }
    

    render() {

        return (
            <div className="ui container " style={{ marginTop: "30px" }}>

                <SearchInput onSearchSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}

export default App;