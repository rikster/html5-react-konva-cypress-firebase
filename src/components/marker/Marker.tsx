import React, { useEffect, useState } from "react";
import { Image } from "react-konva";

//The useImage hook from react-konva doesn't provide the facility
//to pass a callback function directly that is invoked after the image loads.
//import useImage from "use-image";

interface Position {
  position: [number, number];
}

interface MarkerProps extends Position {
  isSelected: boolean;
  onClick: () => void;
}

const Marker: React.FC<MarkerProps> = ({ position, isSelected, onClick }) => {
  const [marker, setMarker] = useState<{
    width: number;
    height: number;
    image: HTMLImageElement | null;
  }>({ width: 0, height: 0, image: null });

  useEffect(() => {
    const img = new window.Image(); //just use the window Image object
    img.src = isSelected ? "/marker-selected.png" : "/marker.png";
    //once loaded set its width and height
    img.onload = () => {
      setMarker({
        width: img.naturalWidth,
        height: img.naturalHeight,
        image: img,
      });
    };
  }, [isSelected]);

  const adjustedPosition = [
    position[0] - marker.width / 2,
    position[1] - marker.height,
  ];

  return (
    //load only if image is not null, with the adjusted position
    marker.image ? (
      <Image
        data-testid="marker-image"
        image={marker.image}
        x={adjustedPosition[0]}
        y={adjustedPosition[1]}
        onClick={onClick}
      />
    ) : null
  );
};

export default Marker;
