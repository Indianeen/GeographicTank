import './style.css';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import {fromLonLat} from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Link from 'ol/interaction/Link';



const source = new VectorSource();

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    center: fromLonLat([0, 0]),
    zoom: 2,
  }),
});
map,addInteraction(new Link())

const layer = new VectorLayer({
  source: source,
});
map.addLayer(layer);
map.addInteraction(
  new DragAndDrop({
    source: source,
    formatConstructors: [GeoJSON],
  })
);