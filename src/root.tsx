import React = require("react");
import Image from "./image";

let imgIndex = 0;

const images = [];

for( var x = 0; x < 9; x ++ ){
  for( var y = 0; y < 7; y ++ ){
    images.push( "/img/" + imgIndex + ".jpg" );
    imgIndex ++;
  }
}

const xforms = {
  0  : [ 1.2,  -7.1,  0.5 ],
  1  : [ 10.7,  -5.5,  0.9 ],
  2  : [ 3.2,  -3.5,  1 ],
  3  : [ 4.9,  -1.2,  1 ],
  4  : [ -1.3,  0.5,  0.7 ],
  5  : [ 0.5,  2.4,  0.7 ],
  6  : [ -2.8,  4.2,  0.4 ],
  7  : [ 0,  0,  0 ],
  8  : [ 0,  0,  0 ],

  9  : [ 0.7,  -0.6,  0.2 ],
  10 : [ 2.7,  1.9,  0.2 ],
  11 : [ 7,  4.7,  -0.1 ],
  12 : [ 18.5,  6.4,  0.2 ],
  13 : [ 13.8,  9,  0 ],
  14 : [ -9,  8,  -0.2 ],
  15 : [ 18,  9.7,  -0.4 ],
  16 : [ 0,  0,  0 ],
  17 : [ 0,  0,  0 ],

  18 : [ 3.4,  1.5,  0.1 ],
  19 : [ 0.45,  -1.9,  0.2 ],
  20 : [ 5,  2.5,  0 ],
  21 : [ -6,  3.5,  0 ],
  22 : [ -0.8,  4.5,  -0.2 ],
  23 : [ -5,  5.8,  -0.2 ],
  24 : [ 3.8,  6.3,  -0.7 ],
  25 : [ 0,  0,  0 ],
  26 : [ 0,  0,  0 ],

  27 : [ 13.9,  2.7,  0 ],
  28 : [ 1.7,  0.8,  0.1 ],
  29 : [ 0.2,  3.7,  0 ],
  30 : [ 2,  3.5,  0 ],
  31 : [ -0.5,  2.3,  -0.1 ],
  32 : [ 2.5,  2.6,  -0.6 ],
  33 : [ -4,  6.8,  -0.9 ],
  34 : [ 0,  0,  0 ],
  35 : [ 0,  0,  0 ],

  36 : [ 9.3,  2.1,  0 ],
  37 : [ 1.35,  1.5,  0.4 ],
  38 : [ 5.4,  1.5,  0 ],
  39 : [ 8,  1.2,  0 ],
  40 : [ 4.9, 4.5,  -0.1 ],
  41 : [ 3.5,  1.6,  -0.5 ],
  42 : [ 3,  3.3,  -0.6 ],
  43 : [ 0,  0,  0 ],
  44 : [ 0,  0,  0 ],

  45 : [ 14.1,  0.5,  0.2 ],
  46 : [ 3.3,  0.1,  0.2 ],
  47 : [ 4.3,  3.5,  0 ],
  48 : [ 6,  0.7,  0 ],
  49 : [ -0.3,  0.8,  0.1 ],
  50 : [ -2.5,  -0.2,  -0.4 ],
  51 : [ -0.2,  2.8,  -0.5 ],
  52 : [ 0,  0,  0 ],
  53 : [ 0,  0,  0 ],

  54 : [ 5.2,  -1.8,  0.5 ],
  55 : [ 1.6,  -0.2,  -0.3 ],
  56 : [ 6.6,  2,  0.2 ],
  57 : [ 16,  2.5,  -0.5 ],
  58 : [ 5.9,  0,  -0.1 ],
  59 : [ 3.5,  -0.5,  -0.8 ],
  60 : [ 5.2,  -0.9,  -0.3 ],
  61 : [ 0,  0,  0 ],
  62 : [ 0,  0,  0 ]
};

export default class App extends React.Component<{},{}>{
  render() {
    return (
      <div>
        {images.map((u,i)=><div className={"img img-"+i} key={i}>
          <Image 
            url={u} 
            leftOffset={xforms[i][0]} 
            topOffset={xforms[i][1]} 
            rotation={xforms[i][2]}
          />
        </div>)}
      </div>
    );
  }
}
