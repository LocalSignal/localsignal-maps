feature_opts = [
  {
    stylers: [
      { color: $map.data("map-color") },
      { visibility: 'simplified' },
      { weight: 2.0 }
    ]
  },
  {
    elementType: 'labels.text.fill',
    stylers: [{lightness: 90 * invert_map}]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{lightness: 25 * invert_map}]
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [{color: $map.data("map-water")}]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {lightness: 75 * invert_water},
    ]
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [ { visibility: "off" } ]
  },
  { featureType: "administrative.land_parcel", stylers: [ { visibility: "off" } ] },
  { featureType: "administrative.neighborhood", stylers: [ { visibility: "off" } ] },
  { featureType: "poi", stylers: [ { visibility: "off" } ] },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [ { visibility: "off" } ]
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [ { visibility: "off" } ]
  },
  { featureType: "transit", stylers: [ { visibility: "off" } ] }
]
