import React, { Component } from "react";
import loadingGif from "../assets/img/loading.gif";

class Loader extends Component {
  render() {
    return <img src={loadingGif} className="mx-auto d-block" alt="loader" />;
  }
}

export default Loader;
