import React from "react";

function Image({ imgLink, imgAlt, imgStyle }) {
  return (

      <img
        src={imgLink}
        alt={imgAlt}
        className={imgStyle}
      />

  );
}

export default Image;
