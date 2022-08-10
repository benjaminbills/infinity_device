import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "200px",
  height: "200px",
};

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCh5ZjegbiTs3RRgjztpDPMeVvH_Zgv3wE",
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <MapOut />;
}

function MapOut() {
  const center = useMemo(
    () => ({ lat: -1.2967914934844869, lng: 36.80692452943229 }),
    []
  );
  return (
    <GoogleMap
      zoom={18.7}
      center={center}
      mapContainerClassName="map-container"
    >
      <Marker position={center} />
    </GoogleMap>
  );
}

export default Map;
