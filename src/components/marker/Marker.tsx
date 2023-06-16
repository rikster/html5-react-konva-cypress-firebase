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
  const [markerWidth, setMarkerWidth] = useState<number>(0);
  const [markerHeight, setMarkerHeight] = useState<number>(0);
  const [image, setImage] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = new window.Image(); //just use the window Image object
    img.src = isSelected ? "/marker-selected.png" : "/marker.png";
    //once loaded set its width and height
    img.onload = () => {
      setMarkerWidth(img.naturalWidth);
      setMarkerHeight(img.naturalHeight);
      setImage(img);
    };
  }, [isSelected]);

  const adjustedPosition = [
    position[0] - markerWidth / 2,
    position[1] - markerHeight,
  ];

  return (
    //load only if image is not null, with the adjusted position
    image ? (
      <Image
        data-testid="marker-image"
        image={image}
        x={adjustedPosition[0]}
        y={adjustedPosition[1]}
        onClick={onClick}
      />
    ) : null
  );
};

export default Marker;
