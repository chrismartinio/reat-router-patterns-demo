import React, {Component} from "react";
import axios from "axios";

const GIPHY_URL = "http://api.giphy.com/v1";

class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {src: null};

    this.fetchGif = this.fetchGif.bind(this);
  }

  componentDidMount() {
    this.fetchGif(this.props.match.params.name);
  }

  componentDidUpdate(prevProps) {
    let prevName = prevProps.match.params.name;
    let currentName = this.props.match.params.name;
    if (prevName !== currentName) {
      this.fetchGif(currentName);
    }
  }

  async fetchGif(searchTerm) {
    let res = await axios.get(
      `${GIPHY_URL}/gifs/search`, 
      {
        params: {
          q: searchTerm,
          api_key: "dc6zaTOxFJmzC"
      }
      });

    let gifURL = res.data.data[0].images.original.url;
    this.setState({ src: gifURL });
  }

  render() {
    let img = this.state.src ? 
      <img src={this.state.src} /> : null;

    return (
        <div>
          <h4>Here's the full match object:</h4>
          <pre>{JSON.stringify(this.props.match, null, 4)}</pre>
          <h1>Here's a pic of {this.props.match.params.name}.</h1>
          {img}
        </div>
    )
  }
}

export default Food;