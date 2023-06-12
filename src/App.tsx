import React from "react";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";
import jsonData from "./data/map-data.json";

interface Position {
  position: [number, number];
}

// Make sure imported positions are correct type
const positions: Position[] = jsonData.map(({ position }) => ({
  position: [position[0], position[1]] as [number, number],
}));

const Marker: React.FC<Position> = ({ position }) => {
  const [image] = useImage("/marker.png");
  return <Image image={image} x={position[0]} y={position[1]} />;
};

const App = () => {
  const [bgImage] = useImage("/background-map.jpg");

  return (
    <Stage width={799} height={599}>
      <Layer>
        <Image image={bgImage} width={799} height={599} />
        {positions.map((pos, i) => (
          <Marker key={i} position={pos.position} />
        ))}
      </Layer>
    </Stage>
  );
};

export default App;
