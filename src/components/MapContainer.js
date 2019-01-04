import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '25vh',
    marginTop: '2vh',
    position: 'relative',
    borderRadius: '15px'
};

export class MapContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            latitude: props.location.latitude,
            longitude: props.location.longitude
        }
    }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{
                    lat: this.state.latitude,
                    lng: this.state.longitude
                }}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBCHYjd5rWkG0vBHIrTZQB4dpV9qqzoy0Y'
})(MapContainer);