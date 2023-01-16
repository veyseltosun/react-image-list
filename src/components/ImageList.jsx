import React from "react";

const ImageList = (props) => {

   const {images} = props

    console.log(props);
    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", }}> {
            images?.map((image) => {
                const{id, webformatURL, comments, user, tags, views} = image;
                return (
                    <div className="ui link cards" key={id} >
                        <div className="card">
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
                    </div>

                )
            })


        }



        </div>
    )
}

export default ImageList;