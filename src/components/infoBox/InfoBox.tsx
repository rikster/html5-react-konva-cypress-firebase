import React from "react";
import { Rect, Text, Group } from "react-konva";
import { MarkerType } from "../../types/markerType";

interface InfoBoxProps {
  marker: MarkerType | null;
}

const InfoBox: React.FC<InfoBoxProps> = ({ marker }) => {
  const marginRight = 20;
  const marginTop = 20;
  const padding = 10;

  return (
    <Group>
      <Rect
        x={799 - 187 - marginRight} // subtract margin from x coordinate
        y={marginTop} // add margin to y coordinate
        width={187}
        height={300}
        fill="white"
        cornerRadius={5} // add this line to create rounded corners
        data-testid="infobox-rect"
      />
      <Text
        x={592 + padding} // increase the x coordinate by the padding
        y={20 + padding} // increase the y coordinate by the padding
        //use optional chaining to avoid a potential TypeError if marker is null
        //make template literals more readable
        text={
          marker
            ? `Town Information:\n\n` +
              `Name: ${marker?.name}\n` +
              `Type: ${marker?.type}\n` +
              `Population: ${marker?.population}\n` +
              `Wealth: ${marker?.wealth}\n` +
              `Authority: ${marker?.authority}\n` +
              `Number of Guards: ${marker?.numGuards}\n` +
              `Position: ${marker.position[0]},${marker.position[1]}`
            : ""
        }
        width={187}
        align="left"
        verticalAlign="middle"
        data-testid="infobox-text"
      />
    </Group>
  );
};

export default InfoBox;
