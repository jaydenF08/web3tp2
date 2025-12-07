import maplibregl from "https://esm.sh/maplibre-gl@5.13.0";

const carte = new maplibregl.Map({
  container: "carte",
  style: "https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json",
  center: [0, 0],
  zoom: 0.5,
  bearing: 0,
  pitch: 0,
});

carte.on("style.load", () => {
  carte.setProjection({ type: "globe" });

  let rotation = 0;

  function rotate() {
    rotation += 0.05; 
    carte.setBearing(rotation);
    requestAnimationFrame(rotate);
  }

  rotate(); 
});
