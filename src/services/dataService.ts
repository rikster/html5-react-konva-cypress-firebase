import jsonData from "../data/map-data.json";
import { MarkerType } from "../types/markerType";

//for type enforcement, we need to define the type of the position in json data;
//map over json and return a new array of markers with the position as a tuple of numbers
export const markerData: MarkerType[] = jsonData.map((marker) => ({
  ...marker,
  position: [marker.position[0], marker.position[1]] as [number, number],
}));
