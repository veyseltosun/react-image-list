import React from "react";

const style = {
    container:{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-around",
        margin:"10px",
       

    }
}

const ImageList = (props) => {

   const {images} = props

    console.log(props);
    return (
        <div style={style.container}> {
            images?.map((image) => {
                const{id, webformatURL, comments, user, tags, views} = image;
                return (
                    <div className="ui card"  key={id} style={{margin:"7px",}} >
                        
                            <div className="image">
                               <img src={webformatURL} />
                            </div>
                            <div className="content">
                                <div className="header">User : {user}</div>
                                <div className="description" >
                                   Tags: {tags}
                                 </div>

                            </div>
                            <div className="extra content">
                                <span className="right floated" >
                                    Views {views}
                                </span>
                                <span >
                                    <i className="user icon"></i>
                                    Comments {comments}
                                </span>
                            </div>
                       
                    </div>

                )
            })


        }



        </div>
    )
}

export default ImageList;