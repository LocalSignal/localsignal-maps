simple_opts = [
  {
    stylers: [
      { hue: $map.data("map-color") },
      { visibility: 'simplified' },
      { weight: 2.0 }
    ]
  },
  {
    featureType: 'water',
    stylers: [
      { color: $map.data("map-water") }
    ]
  },
  {
    featureType: "administrative.province",
    elementType: "geometry.stroke",
    stylers: [
      { visibility: "on" },
      { color: "#222222" },
      { weight: 2.3 }
    ]
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text",
    stylers: [
      { visibility: "on" },
      { color: "#111111" },
      { weight: 0.7 }
    ]
  },
  {
    featureType: "administrative.country",
    elementType: "geometry.stroke",
    stylers: [
      { visibility: "on" },
      { color: "#000000" },
      { weight: 3 }
    ]
  }
]
