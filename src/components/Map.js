import React, { useEffect, useMemo, useRef, useState } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCh5ZjegbiTs3RRgjztpDPMeVvH_Zgv3wE",
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <MapOut />;
}

function MapOut() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}

export default Map;
