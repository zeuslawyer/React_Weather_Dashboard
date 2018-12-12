import React from "react";
import "./Chart.css";

import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";
//REFERENCE:  https://github.com/borisyankov/react-sparklines

const Chart = ({ data, limit, color, unit }) => {
    
  return (
    <div>
      <Sparklines height={100} width={150} data={data} limit={limit || 5}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        <p>Avg: {average(data)} {unit}</p>
      </div>
    </div>
  );
};

const average =(arr) =>{
    var total = arr.reduce((sum, currentVal)=>sum+currentVal);
    return Math.floor((total)/arr.length)
}

export default Chart;
