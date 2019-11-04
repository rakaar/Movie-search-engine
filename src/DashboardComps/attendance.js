import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Attendace extends Component {
  render() {
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: 'dark2', //"light1", "dark1", "dark2"
      title: {
        text: 'Attendance of the candidate in the past term'
      },
      data: [
        {
          type: 'column', //change type to bar, line, area, pie, etc
          //indexLabel: "{y}", //Shows y value on all Data Points
          indexLabelFontColor: '#5A5757',
          indexLabelPlacement: 'outside',
          dataPoints: [
            { label: 'First Year', y: 70 },
            { label: 'Second Year', y: 60 },
            { label: 'Third Year', y: 80 },
            { label: 'Fourth Year', y: 90 },
            { label: 'Fifth Year', y: 75 }
          ]
        }
      ]
    };

    return (
      <div>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default Attendace;
