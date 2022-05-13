import React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "./google.css"
function Mapbox() {
    const [viewport, setViewport] = React.useState({
        width: "500px",
        height: "400px",
        latitude: 10.822363362499082,
        longitude: 106.68753158363745,
        zoom: 16,
    });
    const [showPopup, togglePopup] = React.useState(false);
    return (
        <ReactMapGL
            {...viewport}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={(viewport) => setViewport(viewport)}
            mapboxAccessToken ="pk.eyJ1IjoibXJtaW5ob2FuMTkwMjAwIiwiYSI6ImNsMzM4anYzYzFrbHUzY21oeDBqaTRnN3oifQ.q-Q5GWlFxbBa6GK0JZpGqg"
        >
            {showPopup && (
                <Popup
                    latitude={10.822363362499082}
                    longitude={106.68753158363745}
                    closeButton={true}
                    closeOnClick={true}
                    onClose={() => togglePopup(false)}
                    anchor="top-right"
                >
                    <div>Pop up marker</div>
                </Popup>
            )}
            {/* 10.822363362499082, 106.68753158363745 */}
            {/* <Marker
                latitude={10.822363362499082}
                longitude={106.68753158363745}
                // offsetLeft={-20}
                // offsetTop={-30}
            >
                <img
                    onClick={() => togglePopup(true)}
                    style={{ height: 50, width: 50 }}
                    src="https://xuonginthanhpho.com/wp-content/uploads/2020/03/map-marker-icon.png"
                />
            </Marker> */}
            
        </ReactMapGL>
    );
}

export default Mapbox;