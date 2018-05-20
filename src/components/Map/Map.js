import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { getMarkerIcon } from './Helpers';

const Map = withScriptjs(withGoogleMap(({data, onClick}) => {
  let center = {};
  if(data.length === 0){
    center = { lat: 43.856316000000035, lng: 18.41308600000002 }
  }else{
    center = { lat: data[0].lat, lng: data[0].lng }
  }
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={center}
    >
      {data.map(item => <Marker 
      onClick={() => onClick(item)} 
      key={item.restaurantId} 
      position={{ lat:item.lat, lng: item.lng }}
      icon={{ url: getMarkerIcon(item.category) }}
      />)}
    </GoogleMap>
  )}));

export default Map;
