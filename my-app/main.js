import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import {Map, View} from 'ol';
import {fromLonLat} from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Link from 'ol/interaction/Link';



const source = new VectorSource();

const map = new Map({
  target: 'map-container',
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