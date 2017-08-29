import React from 'react'


const GetImageButton = (props) => {

    return (
      <div className="card-block ">
        <button className="btn btn-lg" onClick={props.onClick} type="submit" >Submit</button>
      </div>
    );
  }

export default GetImageButton;
