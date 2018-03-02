import React from 'react';
import d3 from 'd3';

class Slice extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let {value, fill, innerRadius = 0, outerRadius} = this.props;
    let arc = d3.svg.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

  return (
    <path d={arc(value)} fill={fill} />
  )

  }
}


export default Slice;
