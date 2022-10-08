import React from "react";
import './imagelist.css';
import ImageCard from "./ImageCard";

const ImageList = (props) => {
   const images = props.images.map((elem) => {
        return <ImageCard image={elem}/>
    });
    
    return <div className="image-list">{images}</div>;
}

export default ImageList;