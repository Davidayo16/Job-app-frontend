import React from "react";

import { Line } from "react-chartjs-2";

const AreaChartComponent = ({ data }) => {
  return (
    <Line
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

export default AreaChartComponent;
