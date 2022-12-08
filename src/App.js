import React from "react";
import ReactEcharts from "echarts-for-react";
import Container from "@mui/material/Container";

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
  };
  return (
    <div className="App">
      <Container maxWidth="sm">
        <ReactEcharts option={option} />
      </Container>
    </div>
  );
}

export default App;
