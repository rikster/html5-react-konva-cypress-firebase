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
        text={
          marker
            ? `Name: ${marker.name}\nType: ${marker.type}\nPopulation: ${marker.population}\nWealth: ${marker.wealth}\nAuthority: ${marker.authority}\nNumber of Guards: ${marker.numGuards}\nPosition: ${marker.position[0]}, ${marker.position[1]}`
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
