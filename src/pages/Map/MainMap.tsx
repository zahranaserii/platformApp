import axios, { AxiosError, AxiosResponse } from "axios";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useMemo, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import markerIcon from "../../assets/markerIcon.png";
import { ILocation } from "../../models/MapModel";
const MainMap = () => {
  //states
  const [loading, setLoading] = useState<boolean>(false);
  const [locations, setLocations] = useState<ILocation[]>([]);
  //function
  const getLocation = async () => {
    setLoading(true);

    await axios
      .get<ILocation[]>("db/db.json")
      .then((res: AxiosResponse<ILocation[]>) => {
        setLocations(res.data);
        console.log("locations", locations);
      })
      .catch((error: AxiosError) => console.log(error.message));
  };

  // effects
  useEffect(() => {
    getLocation();
  }, []);

  //constants

  const customMarker = new Icon({
    iconUrl: markerIcon,
    iconSize: [38, 38],
  });
  const renderMarker = useMemo(() => {
    if (locations?.length > 0) {
      return locations?.map((locate) => {
        console.log("locate", locate);
        return (
          <Marker icon={customMarker} key={locate.id} position={locate.geocode}>
            <Popup>
              <div className="relative flex justify-center font-semibold">
                {locate.name}
              </div>
            </Popup>
          </Marker>
        );
      });
    }
    return <div>locations dosent exist</div>;
  }, [locations]);

  return (
    <div className="h-screen py-4 ">
      <MapContainer center={[35.7219, 51.3347]} zoom={13} className="h-full">
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <MarkerClusterGroup>
          {/* {locations?.map((locate) => {
            return (
              <Marker
                icon={customMarker}
                key={locate.id}
                position={locate.geocode}
              >
                <Popup>
                  <div className="relative flex justify-center font-semibold">
                    {locate.name}
                  </div>
                </Popup>
              </Marker>
            );
          })} */}
          {renderMarker}
        </MarkerClusterGroup>
      </MapContainer>
      {/* {renderMarker} */}
    </div>
  );
};

export default MainMap;
