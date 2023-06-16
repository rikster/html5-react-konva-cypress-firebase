import jsonData from "../data/map-data.json";
import { MarkerType } from "../types/markerType";

//type guard for marker data - take in any object and return a boolean
function isMarkerType(obj: any): obj is MarkerType {
  return (
    "position" in obj &&
    Array.isArray(obj.position) &&
    obj.position.length === 2 &&
    obj.position.every((x: any) => typeof x === "number") &&
    (obj.name ? typeof obj.name === "string" : true) &&
    (obj.type ? typeof obj.type === "string" : true) &&
    (obj.population ? typeof obj.population === "number" : true) &&
    (obj.wealth ? typeof obj.wealth === "number" : true) &&
    (obj.authority ? typeof obj.authority === "string" : true) &&
    (obj.numGuards ? typeof obj.numGuards === "number" : true)
  );
}

//for type enforcement, we need to define the type of the position in json data;
//map over json and return a new array of markers with the position as a tuple of numbers
export const markerData: MarkerType[] = jsonData.map((marker) => {
  if (isMarkerType(marker)) {
    return {
      ...marker,
      position: [marker.position[0], marker.position[1]] as [number, number],
    };
  } else {
    throw new Error("Invalid Marker data");
  }
});
