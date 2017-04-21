(( $ ) ->
  $.fn.localSignalMaps = ->
    place_marker = (map, bounds, info, lat, lng, marker, text) ->
      if marker?
        lsMarker = new google.maps.Marker
          position: new google.maps.LatLng lat, lng
          map: map
          icon: marker
        bounds.extend lsMarker.position
        map.fitBounds bounds

        if text?
          infowindow = new google.maps.InfoWindow
            content: text
          lsMarker.addListener 'click', ->
            infowindow.open map, lsMarker

    @.each ->
      $map = $ @
      google.maps.event.addDomListener window, 'load', ->
        #= include init_opts.coffee
        #= include simple_opts.coffee
        #= include feature_opts.coffee

        map    = new google.maps.Map $map[0], map_options
        info   = new google.maps.InfoWindow()
        bounds = new google.maps.LatLngBounds()


        final_opts = if $map.data("map-simple") == true
          simple_opts
        else
          feature_opts

        custom_map_type = new google.maps.StyledMapType final_opts, {name: 'Custom Style'}
        map.mapTypes.set map_type, custom_map_type


        if $map.data("map-points")?
          for point in $map.data("map-points")
            place_marker map, bounds, info, point["lat"], point["lng"], point["marker"], point["info"]
        else
            place_marker map, bounds, info, $map.data("map-lat"), $map.data("map-lng"), $map.data("map-marker"), $map.data("map-info")

        listener = google.maps.event.addListener map, "idle", ->
          map.setZoom(zoom_level)
          google.maps.event.removeListener(listener)

    @

  $ ->
    $("[data-map-lat]").localSignalMaps()
    $("[data-map-points]").localSignalMaps()
) window.jQuery
