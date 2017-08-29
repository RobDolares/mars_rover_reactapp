import React from 'react'


const ImageDisplay = (props)=> {

  let images = props.images.map((image)=>{
    return (
      <img src={image.img_src} key= {image.id} alt="Mars Rover Images" />
    )
  })


    return (
      <div>
        {images}
      </div>
    )
  }


export default ImageDisplay;
