//all optionally undefinable except for position
//at minimum, it will have a position in the form of a tuple
export interface MarkerType {
  name?: string;
  type?: string;
  population?: number;
  wealth?: number;
  authority?: string;
  numGuards?: number;
  position: [number, number];
}
