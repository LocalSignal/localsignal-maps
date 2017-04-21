(function($) {
  $.fn.localSignalMaps = function() {
    var place_marker;
    place_marker = function(map, bounds, info, lat, lng, marker, text) {
      var infowindow, lsMarker;
      if (marker != null) {
        lsMarker = new google.maps.Marker({
          position: new google.maps.LatLng(lat, lng),
          map: map,
          icon: marker
        });
        bounds.extend(lsMarker.position);
        map.fitBounds(bounds);
        if (text != null) {
          infowindow = new google.maps.InfoWindow({
            content: text
          });
          return lsMarker.addListener('click', function() {
            return infowindow.open(map, lsMarker);
          });
        }
      }
    };
    this.each(function() {
      var $map;
      $map = $(this);
      return google.maps.event.addDomListener(window, 'load', function() {
        var bounds, custom_map_type, feature_opts, final_opts, i, info, init_center, invert_map, invert_water, len, listener, map, map_options, map_type, point, ref, simple_opts, zoom_level;
        map_type = 'custom_style';
        invert_map = $map.data("map-light") === true ? -1 : 1;
        invert_water = $map.data("map-light-water") === true ? -1 : 1;
        zoom_level = $map.data("map-zoom");
        init_center = $map.data("map-points") != null ? new google.maps.LatLng($map.data("map-points")[0]['lat'], $map.data("map-points")[0]['lng']) : new google.maps.LatLng($map.data("map-lat"), $map.data("map-lng"));
        map_options = {
          scrollwheel: false,
          zoom: zoom_level,
          center: init_center,
          mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, map_type]
          },
          mapTypeId: map_type
        };
        simple_opts = [
          {
            stylers: [
              {
                hue: $map.data("map-color")
              }, {
                visibility: 'simplified'
              }, {
                weight: 2.0
              }
            ]
          }, {
            featureType: 'water',
            stylers: [
              {
                color: $map.data("map-water")
              }
            ]
          }, {
            featureType: "administrative.province",
            elementType: "geometry.stroke",
            stylers: [
              {
                visibility: "on"
              }, {
                color: "#222222"
              }, {
                weight: 2.3
              }
            ]
          }, {
            featureType: "administrative.locality",
            elementType: "labels.text",
            stylers: [
              {
                visibility: "on"
              }, {
                color: "#111111"
              }, {
                weight: 0.7
              }
            ]
          }, {
            featureType: "administrative.country",
            elementType: "geometry.stroke",
            stylers: [
              {
                visibility: "on"
              }, {
                color: "#000000"
              }, {
                weight: 3
              }
            ]
          }
        ];
        feature_opts = [
          {
            stylers: [
              {
                color: $map.data("map-color")
              }, {
                visibility: 'simplified'
              }, {
                weight: 2.0
              }
            ]
          }, {
            elementType: 'labels.text.fill',
            stylers: [
              {
                lightness: 90 * invert_map
              }
            ]
          }, {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
              {
                lightness: 25 * invert_map
              }
            ]
          }, {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: $map.data("map-water")
              }
            ]
          }, {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [
              {
                lightness: 75 * invert_water
              }
            ]
          }, {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [
              {
                visibility: "off"
              }
            ]
          }, {
            featureType: "administrative.land_parcel",
            stylers: [
              {
                visibility: "off"
              }
            ]
          }, {
            featureType: "administrative.neighborhood",
            stylers: [
              {
                visibility: "off"
              }
            ]
          }, {
            featureType: "poi",
            stylers: [
              {
                visibility: "off"
              }
            ]
          }, {
            featureType: "road",
            elementType: "labels",
            stylers: [
              {
                visibility: "off"
              }
            ]
          }, {
            featureType: "road",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off"
              }
            ]
          }, {
            featureType: "transit",
            stylers: [
              {
                visibility: "off"
              }
            ]
          }
        ];
        map = new google.maps.Map($map[0], map_options);
        info = new google.maps.InfoWindow();
        bounds = new google.maps.LatLngBounds();
        final_opts = $map.data("map-simple") === true ? simple_opts : feature_opts;
        custom_map_type = new google.maps.StyledMapType(final_opts, {
          name: 'Custom Style'
        });
        map.mapTypes.set(map_type, custom_map_type);
        if ($map.data("map-points") != null) {
          ref = $map.data("map-points");
          for (i = 0, len = ref.length; i < len; i++) {
            point = ref[i];
            place_marker(map, bounds, info, point["lat"], point["lng"], point["marker"], point["info"]);
          }
        } else {
          place_marker(map, bounds, info, $map.data("map-lat"), $map.data("map-lng"), $map.data("map-marker"), $map.data("map-info"));
        }
        return listener = google.maps.event.addListener(map, "idle", function() {
          map.setZoom(zoom_level);
          return google.maps.event.removeListener(listener);
        });
      });
    });
    return this;
  };
  return $(function() {
    $("[data-map-lat]").localSignalMaps();
    return $("[data-map-points]").localSignalMaps();
  });
})(window.jQuery);
