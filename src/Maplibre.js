import React, { useEffect, useRef } from "react";
import { Map } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./Maplibre.css";

function createMap(id) {
  return new Map({
    container: id,
    style: "https://demotiles.maplibre.org/style.json",
  });
}

export function Maplibre({ id, initialCamera }) {
  const ref = useRef(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    if (ref.current) return;

    ref.current = createMap(id, initialCamera);
    cameraRef.current = initialCamera || {};

    window.maplibre = ref.current;
  }, [id, initialCamera]);

  // useEffect(() => {
  //   return () => {
  //     delete window.maplibre;
  //     if (ref.current?.style) ref.current.remove();
  //   };
  // }, []);

  return <div className="Maplibre-container" id={id}></div>;
}
