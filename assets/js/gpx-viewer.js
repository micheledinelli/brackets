function initGPXMap(containerId, gpxFile) {
  let opts = {
    map: {
      center: [41.4583, 12.7059],
      zoom: 5,
      fullscreenControl: false,
      resizerControl: true,
    },
    elevationControl: {
      options: {
        theme: "magenta-theme",
        collapsed: false,
        detached: true,
        summary: "inline",
        time: true,
        speed: true,
        acceleration: "disabled",
        altitude: "disabled",
        legend: true,
        ruler: true,
        timestamps: true,
        followMarker: false,
        autofitBounds: true,
        imperial: false,
        hotline: 'speed',
      },
    },
    layersControl: { options: { collapsed: false } }
  };

  let map = L.map(containerId, opts.map);

  let controlElevation = L.control.elevation({
    ...opts.elevationControl.options,
  }).addTo(map);
  
  let controlLayer = L.control.layers(null, null, opts.layersControl.options);

  controlElevation.on('eledata_loaded', ({layer, name}) => {
    controlLayer.addTo(map);
    layer.eachLayer(trkseg => {
      if(trkseg.feature && trkseg.feature.geometry.type !== "Point") {
        controlLayer.addOverlay(trkseg, trkseg.feature.properties?.name || name);
      }
    });
    
  });

  controlElevation.load(gpxFile);
}
