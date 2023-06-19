export interface MarkerType {
  name?: string;
  type?: "village" | "small town" | "large town" | "small city" | "large city";
  population?: number;
  wealth?: number;
  authority?: "constable" | "captain of the guard" | "sheriff";
  numGuards?: number;
  position: [number, number];
}
