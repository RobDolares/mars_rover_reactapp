import React, {Component} from 'react'
import GetImageButton from './GetImageButton'
import ImageDisplay from './ImageDisplay'

const API_KEY = "iekmO1dGEr3ByEUxc4OiVTIENXSjYsv9OWnwShbB";

export default class GetImageForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: ""
    }

    this.fetchRoverImage = this.fetchRoverImage.bind(this);
    this.handleRover = this.handleRover.bind(this);
    this.handleCamera = this.handleCamera.bind(this);
    this.handleSol = this.handleSol.bind(this);
  }

  fetchRoverImage = (e) => {
    e.preventDefault();
    this.setState({rover: this.state.rover, camera: this.state.camera, photos: [], sol: this.state.photos})
    let cam = this.state.camera;
    let rove = this.state.rover;
    let num = this.state.sol;

    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;

    fetch(imageUrl).then(results => {
      return results.json();
    }).then(data => {
      console.log(data)
      this.setState({
        rover: this.state.rover,
        camera: this.state.camera,
        images: data.photos,
        sol: this.state.sol
      });
    })
  }

  handleRover = (e) => {
    e.preventDefault();
    this.setState({rover: e.target.value})
  }

  handleCamera = (e) => {
    e.preventDefault();
    this.setState({camera: e.target.value})
  }

  handleSol = (e) => {
    e.preventDefault();
    this.setState({sol: e.target.value})
  }

  render() {
    //***** Inline Styles *****//
    let categoryStyle = {
      "fontFamily" : "Raleway",
      "fontSize" : "1.1rem",
      "padding" : "5px",
      "color" : "white"
    }
    return (
      <div>
        <form className="row" >
          <div className="col-md-4 col-xs-12">
            <label style={categoryStyle} htmlFor="rover">Rover</label>
            <select onChange={this.handleRover} id="rover" value={this.state.value}>
              <option value="Curiosity">Curiosity</option>
              <option value="Opportunity">Opportunity</option>
              <option value="Spirit">Spirit</option>
            </select>
          </div>
          <div className="col-md-4 col-xs-12">
            <label style={categoryStyle} htmlFor="camera">Camera Type</label>
            <select onChange={this.handleCamera} id="rover" value={this.state.value}>
              <option value="fhaz">FHAZ (Front Hazard)</option>
              <option value="rhaz">RHAZ (Rear Hazard)</option>
              <option value="navcam">NAVCAM (Navigation Cam)</option>
            </select>
          </div>
          <div className="col-md-4 col-xs-12">
            <label style={categoryStyle} htmlFor="sol">Martian Sol: 1000-2000</label>
            <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
          </div>



        </form>
        <div>
          <GetImageButton className="row" onClick={this.fetchRoverImage}/>
          <h2 className="col-xs-12">{this.state.rover}</h2>
          <ImageDisplay images={this.state.images}/>
        </div>
      </div>
    );
  }
}
