import React from "react";
import ReactEcharts from "echarts-for-react";
import { Rnd } from "react-rnd";
import global from "./global";
import "@fontsource/raleway-dots";

function App() {
  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
      },
    ],
    textStyle: {
      color: function () {
        return "white";
      },
    },
    autoResize: true,
  };
  return (
    <div className="App">
      <span style={global.span}>Drag</span>
      <span style={global.span}>Resize</span>
      <span style={global.span}>Stretch</span>
      <Rnd
        style={style}
        default={{
          //Calculating the height and width to center the container on initial load
          x: window.innerWidth / 2 - 210,
          y: window.innerHeight / 2 - 125,
          width: 420,
          height: 250,
        }}
        bounds="window" //Bounds the container withing the viewport
      >
        <div style={{ width: "100%" }}>
          <ReactEcharts option={option} />
        </div>
      </Rnd>
    </div>
  );
}

const style = {
  display: "flex",
  flexDirection: "column",
  border: "5px dotted white",
  justifyContent: "center",
};

export default App;
