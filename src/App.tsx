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
      <div className="flex flex-col items-center bg-gray-200 min-h-screen">
        <h1 className="text-4xl font-bold text-blue-700 mt-8 mb-4">
          Nearmap Test
        </h1>
        <Stage width={799} height={599} data-testid="app-stage">
          <Layer data-testid="app-layer">
            <Image
              image={bgImage}
              width={799}
              height={599}
              onClick={handleBackgroundClick}
              data-testid="app-background-image"
            />
            {markerData.map((marker: MarkerType, i: number) => (
              <Marker
                key={i}
                position={marker.position}
                isSelected={marker === selectedMarker}
                onClick={() => handleMarkerClick(marker)}
                data-testid="app-marker"
              />
            ))}
            {selectedMarker && <InfoBox marker={selectedMarker} />}
          </Layer>
        </Stage>
      </div>
    </>
  );
};

export default App;
