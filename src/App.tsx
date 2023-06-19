import { useState, useMemo, useCallback } from "react";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";
import Marker from "./components/marker/Marker";
import InfoBox from "./components/infoBox/InfoBox";
import { MarkerType } from "./types/markerType";
import { markerData } from "./services/dataService";

const App = () => {
  const [bgImage] = useImage("/background-map.jpg");
  const [selectedMarker, setSelectedMarker] = useState<MarkerType | null>(null);

  //useCallback hook, only if the marker state changes - too verbose for this size app? (scaleable)
  const handleMarkerClick = useCallback((marker: MarkerType) => {
    setSelectedMarker(marker);
  }, []);

  //useCallback hook, only if the selectedMarker state changes - too verbose for this size app? (scaleable)
  const handleBackgroundClick = useCallback(() => {
    setSelectedMarker(null);
  }, []);

  //useMemo hook, only if the selectedMarker state changes.
  const markers = useMemo(
    () =>
      markerData.map((marker: MarkerType, i: number) => (
        <Marker
          key={i}
          position={marker.position}
          isSelected={marker === selectedMarker}
          onClick={() => handleMarkerClick(marker)}
          data-testid="app-marker"
        />
      )),
    [selectedMarker, handleMarkerClick]
  );

  //useMemo hook, only if the selectedMarker state changes.
  const infoBox = useMemo(
    () => selectedMarker && <InfoBox marker={selectedMarker} />,
    [selectedMarker]
  );

  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-gray-200">
        <h1 className="mb-4 mt-8 text-4xl font-bold text-blue-700">
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
            {markers}
            {infoBox}
          </Layer>
        </Stage>
      </div>
    </>
  );
};

export default App;
