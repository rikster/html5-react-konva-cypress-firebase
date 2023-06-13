import React from "react";
import { Image } from "react-konva";
import useImage from "use-image";

interface Position {
  position: [number, number];
}

interface MarkerProps extends Position {
  isSelected: boolean;
  onClick: () => void;
}

const Marker: React.FC<MarkerProps> = ({ position, isSelected, onClick }) => {
  const [image] = useImage(isSelected ? "/marker-selected.png" : "/marker.png");
  return (
    <Image data-testid="marker-image" image={image} x={position[0]} y={position[1]} onClick={onClick} />
  );
};

export default Marker;
