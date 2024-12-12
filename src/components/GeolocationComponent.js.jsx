import React from "react";
import useGeolocation from "../hooks/useGeolocation";

function GeolocationComponent() {
  const { latitude, longitude, error } = useGeolocation();

  return (
    <div>
      <h1>Геолокація користувача</h1>
      {error ? (
        <p style={{ color: "red" }}>Помилка: {error}</p>
      ) : (
        <div>
          <p>Широта: {latitude}</p>
          <p>Довгота: {longitude}</p>
        </div>
      )}
    </div>
  );
}

export default GeolocationComponent;
