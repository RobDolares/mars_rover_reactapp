import React from 'react'


const ImageDisplay = (props)=> {


  let images = props.images.map((image)=>{
    return (
      <img className="row card-block image col-lg-4 col-md-6" src={image.img_src} key= {image.id} alt="Mars Rover Images" />
    )
  })

    return (
      <div className="image">
        <div className="row offset-1">
              {images}
        </div>
      </div>
    )
  }


export default ImageDisplay;
