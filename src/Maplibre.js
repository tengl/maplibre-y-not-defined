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

export function Maplibre({ id }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) return;

    ref.current = createMap(id);

    window.maplibre = ref.current;
  }, [id]);

  // useEffect(() => {
  //   return () => {
  //     delete window.maplibre;
  //     if (ref.current?.style) ref.current.remove();
  //   };
  // }, []);

  return <div className="Maplibre-container" id={id}></div>;
}
