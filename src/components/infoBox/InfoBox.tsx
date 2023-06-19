import React from "react";
import { Rect, Text, Group } from "react-konva";
import { MarkerType } from "../../types/markerType";
import toTitleCase from "../../services/stringUtils";

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
            ? `Location Information:\n\n\n`.toUpperCase() +
              `Name: ${marker?.name ? toTitleCase(marker?.name) : "N/A"}\n\n` +
              `Type: ${marker?.type ? toTitleCase(marker?.type) : "N/A"}\n\n` +
              `Population: ${
                marker?.population ? marker.population.toLocaleString() : "N/A"
              }\n\n` +
              `Wealth: ₤${
                marker?.wealth ? marker?.wealth.toLocaleString() : "N/A"
              }\n\n` +
              `Authority: ${
                marker?.authority ? toTitleCase(marker?.authority) : "N/A"
              }\n\n` +
              `Number of Guards: ${
                marker?.numGuards ? marker?.numGuards : "N/A"
              }\n\n` +
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
