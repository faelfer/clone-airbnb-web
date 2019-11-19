import React, { Component } from "react";
import Dimensions from "react-dimensions";
import { Container } from "./styles";
import MapGL from "react-map-gl";
import PropTypes from "prop-types";

const TOKEN =
  "pk.eyJ1IjoibnlkaW5vIiwiYSI6ImNrMzV3NHdyMjFoc3Mzbm1vbGNuY2s4aWQifQ.Z4crc5NFQXEoOOdorcDSJw";

class Map extends Component {
  static propTypes = {
    containerWidth: PropTypes.number.isRequired,
    containerHeight: PropTypes.number.isRequired
  };

  state = {
    viewport: {
      latitude: -27.2108001,
      longitude: -49.6446024,
      zoom: 12.8,
      bearing: 0,
      pitch: 0
    }
  };
  render() {
    const { containerWidth: width, containerHeight: height } = this.props;
    return (
      <MapGL
        width={width}
        height={height}
        {...this.state.viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={TOKEN}
        onViewportChange={viewport => this.setState({ viewport })}
      />
    );
  }
}

const DimensionedMap = Dimensions()(Map);
const App = () => (
  <Container>
    <DimensionedMap />
  </Container>
);

export default App;