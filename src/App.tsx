import { useState } from "react";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";
import Marker from "./components/marker/Marker";
import InfoBox from "./components/infoBox/InfoBox";
import { MarkerType } from "./types/markerType";
import { markerData } from "./services/dataService";

const App = () => {
  const [bgImage] = useImage("/background-map.jpg");
  const [selectedMarker, setSelectedMarker] = useState<MarkerType | null>(null);

  const handleMarkerClick = (marker: MarkerType) => {
    setSelectedMarker(marker);
  };

  const handleBackgroundClick = () => {
    setSelectedMarker(null);
  };

  return (
    <>
      <h1>nearmap test</h1>
      <Stage width={799} height={599}>
        <Layer>
          <Image
            image={bgImage}
            width={799}
            height={599}
            onClick={handleBackgroundClick}
          />
          {markerData.map((marker: MarkerType, i: number) => (
            <Marker
              key={i}
              position={marker.position}
              isSelected={marker === selectedMarker}
              onClick={() => handleMarkerClick(marker)}
            />
          ))}
          {selectedMarker && <InfoBox marker={selectedMarker} />}
        </Layer>
      </Stage>
    </>
  );
};

export default App;
