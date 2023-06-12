import React from "react";
import { Rect, Text, Group } from "react-konva";

interface InfoBoxProps {
  text: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ text }) => {
  const marginRight = 20;
  const marginTop = 20;

  return (
    <Group>
      <Rect
        x={799 - 187 - marginRight} // subtract margin from x coordinate
        y={marginTop} // add margin to y coordinate
        width={187}
        height={300}
        fill="white"
        cornerRadius={5} // add this line to create rounded corners
      />
      <Text
        x={799 - 187 - marginRight} // subtract margin from x coordinate
        y={marginTop + 150} // add margin to y coordinate
        text={text}
        width={187}
        align="center"
        verticalAlign="middle"
      />
    </Group>
  );
};

export default InfoBox;
