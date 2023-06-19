import { ref, get, child } from "firebase/database";
import { db } from "../firebaseConfig";
import { MarkerType } from "../types/markerType";

// Fetch data from Firebase
export async function fetchMarkerData(): Promise<MarkerType[]> {
  const data: MarkerType[] = [];
  
  // get() a snapshot of the entire database at the root level
  const snap = await get(child(ref(db), '/')); //root node prob should be /markers to allow for other data types in the future
  
  //cycle through each child of the snapshot and push it to the data array
  snap.forEach(childSnap => {
    const marker = childSnap.val();
    if (isMarkerType(marker)) {
      data.push({
        ...marker,
        position: [marker.position[0], marker.position[1]] as [number, number],
      });
    } else {
      throw new Error("Invalid Marker data");
    }
  });

  return data;
}

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
