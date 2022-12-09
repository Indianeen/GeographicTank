import './style.css';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: './data/countries.json',
      })
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});
