(( $ ) ->
  $.fn.localSignalMaps = ->
    @.each ->
      $map = $ @
      google.maps.event.addDomListener window, 'load', ->
        #= include init_opts.coffee
        #= include simple_opts.coffee
        #= include feature_opts.coffee

        if $map.data("map-points")?
          console.log "one"
        else
          ls_map = new google.maps.LatLng $map.data("map-lat"), $map.data("map-lng")
          map_options =
            zoom: $map.data("map-zoom")
            center: ls_map
            scrollwheel: false
            mapTypeControlOptions:
              mapTypeIds: [google.maps.MapTypeId.ROADMAP, map_type]
            mapTypeId: map_type
          map = new google.maps.Map $map[0], map_options

          marker = $map.data("map-marker")

          if marker?
            myntMarker = new google.maps.Marker
              position: ls_map
              map: map
              icon: marker
              title: 'LocalSignal Maps'

          final_opts = if $map.data("map-simple") == true
            simple_opts
          else
            feature_opts

          custom_map_type = new google.maps.StyledMapType final_opts, {name: 'Custom Style'}
          map.mapTypes.set map_type, custom_map_type

    @

  $ ->
    $("[data-map-lat]").localSignalMaps()
    $("[data-map-points]").localSignalMaps()
) window.jQuery
