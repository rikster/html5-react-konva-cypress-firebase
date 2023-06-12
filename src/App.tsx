import { useState } from "react";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";
import jsonData from "./data/map-data.json";
import Marker from "./components/marker/Marker";
import InfoBox from "./components/infoBox/InfoBox";

interface Position {
  position: [number, number];
}

// Make sure imported positions are correct type
const positions: Position[] = jsonData.map(({ position }) => ({
  position: [position[0], position[1]] as [number, number],
}));

const App = () => {
  const [bgImage] = useImage("/background-map.jpg");
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);

  const handleMarkerClick = (index: number) => {
    setSelectedMarker(index);
  };

  return (
    <Stage width={799} height={599}>
      <Layer>
        <Image image={bgImage} width={799} height={599} />
        {positions.map((pos, i) => (
          <Marker
            key={i}
            position={pos.position}
            isSelected={i === selectedMarker}
            onClick={() => handleMarkerClick(i)}
          />
        ))}
        <InfoBox text="Test" />
      </Layer>
    </Stage>
  );
};

export default App;
