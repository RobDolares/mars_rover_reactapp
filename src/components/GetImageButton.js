import React from 'react'


const GetImageButton = (props) => {

    return (
      <div>
        <button className="btn btn-lg" onClick={props.onClick} type="submit" >Submit</button>
      </div>
    );
  }

export default GetImageButton;
