import React from "react";
import axios from "axios";


import SearchInput from "./SearchInput";
import ImageList from "./ImageList";



class App extends React.Component {

    state= {images: []};


      onSearchSubmit = async (entry) =>  {
      const response =  await axios.get(`https://pixabay.com/api/?key=32890479-9c105d6129c482faf9ed98a32&q=${entry}&image_type=photo`)
      console.log(response.data.hits)
      this.setState({images:response.data.hits})

    }
    

    render() {

        return (
            <div className="ui container" style={{ marginTop: "30px", background: "#c0c0aa", /* fallback for old browsers */
            background: "-webkit-linear-gradient(to right, #1cefff, #c0c0aa)",  /* Chrome 10-25, Safari 5.1-6 */
            background: "linear-gradient(to right, #1cefff, #c0c0aa)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
             }}>

                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App;