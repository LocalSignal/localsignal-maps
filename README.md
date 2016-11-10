# LocalSignal Maps

## Current version

[Download 0.9.0](https://github.com/LocalSignal/localsignal-maps/archive/0.9.0.zip)

## Synopsis

LocalSignal Maps is a jQuery library that is intended to make displaying a stylized map painless. The data attributes used to explain how to render the map
to the library follow the pattern used my the LocalSignal CMS. This does not mean however that this library is only useful to LocalSignal. Try it out and enjoy
pain free maps.

## How To

The api will auto initialize any element containing the data-map-lat data attribute. More how to info including all data attributes and values to come. In the meantime, look over the coffee script.

## Code Example

### Hue Maps With Marker

![Example 1](https://s3.amazonaws.com/localsignal/maps/examples/1.png)

```html
<div class="map-canvas"
     data-map-simple="true"
     data-map-lat="29.763544"
     data-map-lng="-95.461800"
     data-map-color="#002130"
     data-map-water="#00cefd"
     data-map-zoom="10"
     data-map-marker="https://s3.amazonaws.com/localsignal/general/images/map-markers/marker-10.png">
</div>
```

### With Marker

![Example 2](https://s3.amazonaws.com/localsignal/maps/examples/2.png)

```html
<div class="map-canvas"
     data-map-lat="29.763544"
     data-map-lng="-95.461800"
     data-map-color="#002130"
     data-map-water="#00cefd"
     data-map-zoom="10"
     data-map-marker="https://s3.amazonaws.com/localsignal/general/images/map-markers/marker-16.png">
</div>
```

### No Marker

![Example 3](https://s3.amazonaws.com/localsignal/maps/examples/3.png)

```html
<div class="map-canvas"
     data-map-lat="29.763544"
     data-map-lng="-95.461800"
     data-map-color="#00cefd"
     data-map-water="#333333"
     data-map-zoom="10"
     data-map-light="true">
</div>
```

### Red!!!

![Example 4](https://s3.amazonaws.com/localsignal/maps/examples/4.png)

```html
<div class="map-canvas"
     data-map-lat="29.763544"
     data-map-lng="-95.461800"
     data-map-color="#990000"
     data-map-water="#002130"
     data-map-zoom="10"
     data-map-light="true">
</div>
```

## Installation

Include jQuery, the google api lib and this library. Preferably in the bottom of the body.

```html
<script src="jquery-2.2.1.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_API_KEY"></script>
<script src="localsignal-maps.min.js"></script>
```

## License

MIT
