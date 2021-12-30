import React from "react";

function Image({ imgLink, imgAlt, imgWidth, imgHeight }) {
  return (

      <img
        src={imgLink}
        alt={imgAlt}
        width={imgWidth}
        height={imgHeight}
      />

  );
}

export default Image;
