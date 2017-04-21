map_type = 'custom_style'
invert_map = if $map.data("map-light") == true then -1 else 1
invert_water = if $map.data("map-light-water") == true then -1 else 1
zoom_level = $map.data("map-zoom")

init_center = if $map.data("map-points")?
  new google.maps.LatLng $map.data("map-points")[0]['lat'], $map.data("map-points")[0]['lng']
else
  new google.maps.LatLng $map.data("map-lat"), $map.data("map-lng")

map_options =
  scrollwheel: false
  zoom: zoom_level
  center: init_center
  mapTypeControlOptions:
    mapTypeIds: [google.maps.MapTypeId.ROADMAP, map_type]
  mapTypeId: map_type
