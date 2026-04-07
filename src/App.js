import { useState } from "react";

export default function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({});

  const {lat, long} = position;

  function getPosition() {
    
    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          long: pos.coords.longitude,
        });
      }
    );
    setIsLoading(false);

  }

  return (
   <div class="container">
    <h1>📍 GeoSnap</h1>

    <button onClick={getPosition} disabled={isLoading}>
      Get My Position
    </button>

    <p class="loading hidden">Getting your location...</p>

    {position.lat || position.long ? <div class="result">
      <p>Your GPS position:</p>
      <a href={`https://www.openstreetmap.org/#map=16/${lat}/${long}`} target="_blank" class="map-link">
        {lat}, {long}
      </a>
    </div> : ""}

    

    <p class="counter">
      Requests: <span id="requestCount">0</span>
    </p>
  </div>
  );
}
