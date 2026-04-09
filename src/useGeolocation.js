import { useState } from "react";

export function useGeolocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({});
  const { lat, long } = position;

  function getPosition() {
    setIsLoading(true);

    navigator.geolocation.getCurrentPosition((pos) => {
      setPosition({
        lat: pos.coords.latitude,
        long: pos.coords.longitude,
      });
    });
    setIsLoading(false);
  }

  return { isLoading, position, getPosition };
  
}