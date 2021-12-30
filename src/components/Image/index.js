import React from "react";

function Image({ imgLink, imgAlt, imgWidth, imgHeight, imgStyle }) {
  return (

      <img
        src={imgLink}
        alt={imgAlt}
        width={imgWidth}
        height={imgHeight}
        className={imgStyle}
      />

  );
}

export default Image;
