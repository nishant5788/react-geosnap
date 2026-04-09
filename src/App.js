import { useState } from "react";
import { useGeolocation } from "./useGeolocation";
import { useLocalStorageState } from "./useLocalStorageState";

export default function App() {
  const {
    isLoading,
    position: { lat, long },
    getPosition,
  } = useGeolocation();

  const [clicks, setClicks] = useLocalStorageState(0, "Requests");

  function handleClick() {
    setClicks((count) => count + 1);
    getPosition();
  }

  return (
    <div class="container">
      <h1>📍 GeoSnap</h1>

      <button onClick={handleClick} disabled={isLoading}>
        Get My Position
      </button>

      {lat || long ? (
        <div class="result">
          <p>Your GPS position:</p>
          <a
            href={`https://www.openstreetmap.org/#map=16/${lat}/${long}`}
            target="_blank"
            rel="noreferrer"
            class="map-link"
          >
            {lat}, {long}
          </a>
        </div>
      ) : (
        ""
      )}

      {clicks === 0 ? "" : <p class="counter">
        You have Requested your location <span>{clicks} times now</span>
      </p>}
      
    </div>
  );
}
