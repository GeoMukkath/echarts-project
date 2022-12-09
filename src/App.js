import React from "react";
import ReactEcharts from "echarts-for-react";
import { Rnd } from "react-rnd";
import { global } from "./global";

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
      color: function (value) {
        return "white";
      },
    },
    autoResize: true,
  };
  return (
    <div className="App" style={global.page_background}>
      <Rnd
        style={style}
        default={{
          x: 0,
          y: 0,
          width: 350,
          height: 250,
        }}
        bounds="body"
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
