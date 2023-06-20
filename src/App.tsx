import { useState, useEffect, useMemo, useCallback } from "react";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";
import Marker from "./components/marker/Marker";
import InfoBox from "./components/infoBox/InfoBox";
import { MarkerType } from "./types/markerType";
import { fetchMarkerData } from "./services/dataService";
import Search from "./components/search/Search";

const App = () => {
  const [bgImage] = useImage("/background-map.jpg");
  const [selectedMarker, setSelectedMarker] = useState<MarkerType | null>(null);
  const [markerData, setMarkerData] = useState<MarkerType[]>([]);

  useEffect(() => {
    // Fetch marker data from API - async function therefore use useEffect and set state
    fetchMarkerData()
      .then((data) => setMarkerData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleMarkerClick = useCallback((marker: MarkerType) => {
    setSelectedMarker(marker);
  }, []);

  const handleSearch = useCallback(
    (query: string) => {
      const lowercasedQuery = query.toLowerCase();
      const searchedMarker = markerData.find((marker) =>
        marker.name?.toLowerCase().includes(lowercasedQuery)
      );
      setSelectedMarker(searchedMarker || null);
    },
    [markerData]
  );

  const handleBackgroundClick = useCallback(() => {
    setSelectedMarker(null);
  }, []);

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
    [markerData, selectedMarker, handleMarkerClick]
  );

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
        <Search onSearch={handleSearch} />
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
