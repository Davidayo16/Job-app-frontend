import React, { useState } from "react";
import BarChartComponent from "./BarChart";
import AreaChartComponent from "./AreaChart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const ChartsContainer = () => {
  const history = useNavigate();
  const locationn = useLocation();
  const dispatch = useDispatch();

  const [barChart, setBarChart] = useState(true);
  const data = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345,
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555,
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555,
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
    },
  ];
  const getStats = useSelector((state) => state.getStats);
  const { monthlyApplications, stats, loading } = getStats;
  const [chartData, setChartData] = React.useState({
    labels: monthlyApplications?.map((data) => data?.date),
    datasets: [
      {
        label: "Count ",
        data: monthlyApplications?.map((data) => data?.count),
        barPercentage: 0.5,
        barThickness: 60,
        minBarLength: 2,
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  // Rest of the code...

  return (
    <div className="v mt-5">
      <h2>Monthly Applications</h2>
      <button
        type="button"
        onClick={() => setBarChart(!barChart)}
        className="chart-btn"
      >
        {barChart ? " View Area Chart" : "View Bar Chart"}
      </button>
      {barChart ? (
        <BarChartComponent data={chartData} />
      ) : (
        <AreaChartComponent data={chartData} />
      )}
    </div>
  );
};

export default ChartsContainer;
