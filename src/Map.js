import React from 'react';
import { GoogleMap, Circle, LoadScript } from '@react-google-maps/api';

const center = {
  lat: 48.1173,
  lng: -1.6778,
};

const options = {
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  radius: 30000, // 30 km en mètres
};

function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyD6jdXmNJNx897qoys4D6Ku4j_kdoUGf7Y">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={center}
        zoom={10}
      >
        <Circle
          center={center}
          options={options}
        />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
