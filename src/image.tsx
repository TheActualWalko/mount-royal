import React = require("react");

const wrapStyle = {
  overflow: "hidden",
  position: "relative",
  width   : "100vw",
  height  : "100vh"
};

export default ( { url, leftOffset, topOffset, rotation } )=>{
  const imageStyle = {
    position : "absolute",
    left     : (leftOffset-20)+"%",
    top      : (topOffset-20)+"%",
    width    : 140+"%",
    height   : 140+"%",
    backgroundImage : "url("+url+")",
    backgroundSize  : "cover",
    backgroundPosition : "50% 50%",
    transform : "rotate("+rotation+"deg)"
  };
  return (
    <div style={wrapStyle}>
      <div style={imageStyle}>
        
      </div>
    </div>
  );
};
