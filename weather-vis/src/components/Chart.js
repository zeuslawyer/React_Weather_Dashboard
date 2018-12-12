import React from 'react'

import { Sparklines, SparklinesLine } from 'react-sparklines';
//REFERENCE:  https://github.com/borisyankov/react-sparklines

const Chart = ({data, limit, color}) => {
  return (
    <div>
      <Sparklines height={80} width={110} data={data} limit={limit || 5}>
            <SparklinesLine color={color} />
          </Sparklines>
    </div>
  )
}

export default Chart
