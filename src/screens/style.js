export default [
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [{saturation: 36}, {color: '#333333'}, {lightness: 40}],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [{visibility: 'on'}, {color: '#ffffff'}, {lightness: 16}],
  },
  {
    featureType: 'all',
    elementType: 'labels.icon',
    stylers: [{visibility: 'off'}],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [{color: '#fefefe'}, {lightness: 20}],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [{color: '#fefefe'}, {lightness: 20}, {weight: 1.2}],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [{color: '#f5f5f5'}, {lightness: 20}],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{color: '#f5f5f5'}, {lightness: 21}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#ffffff'}, {lightness: 17}],
  },
  {
    featureType: 'road',
    elementType: 'labels.text',
    stylers: [{visibility: 'off'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [{color: '#ffffff'}, {lightness: 17}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#ffffff'}, {lightness: 29}, {weight: 0.2}],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'all',
    stylers: [{visibility: 'on'}],
  },
  {
    featureType: 'road',
    elementType: 'labels.text',
    stylers: [{visibility: 'off'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [{color: '#ffffff'}, {lightness: 17}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#ffffff'}, {lightness: 17}, {weight: 1.2}],
  },
];
