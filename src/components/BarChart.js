import React from "react";
import { Bar } from "react-chartjs-2";

const BarChartComponent = ({ data }) => {
  return (
    <Bar
      data={data}
      options={{
        plugins: {
          title: {
            display: true,
            text: "",
          },
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

export default BarChartComponent;
