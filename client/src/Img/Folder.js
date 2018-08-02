import React from "react";

const Folder= ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 32 32"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`${className || ""}`}

  >
    <path
      fill={fill}
      d="M18.405 4.799c-0.111-0.44-0.655-0.799-1.21-0.799h-6.814c-0.554 0-1.33-0.318-1.722-0.707l-0.596-0.588c-0.392-0.389-1.167-0.705-1.721-0.705h-3.255c-0.555 0-1.059 0.447-1.12 0.994l-0.292 3.006h16.931l-0.201-1.201zM19.412 7h-18.824c-0.342 0-0.61 0.294-0.577 0.635l0.923 9.669c0.037 0.394 0.369 0.696 0.766 0.696h16.6c0.397 0 0.728-0.302 0.766-0.696l0.923-9.669c0.033-0.341-0.235-0.635-0.577-0.635z"
    />
  </svg>
);

export default Folder;