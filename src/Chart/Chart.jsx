import React from "react";
import { connect } from "react-redux";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import "./style.css";

const Chart = ({ range }) => {
  const rangeObj = range.map((item, i) => ({
    dates: new Date(item).toLocaleDateString("en", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    money: Math.floor(Math.random() * 1000) * i,
  }));

  return (
    <div className="chart-wrapper">
      <LineChart
        margin={{ top: 30, bottom: 35, right: 5 }}
        width={1200}
        height={500}
        data={rangeObj}
      >
        <XAxis
          angle={-45}
          dataKey="dates"
          tickMargin={10}
          tick={{ fontSize: 10 }}
          textAnchor="end"
        />
        <YAxis dataKey="money" tickMargin={15} tick={{ fontSize: 10 }} />
        <Tooltip wrapperStyle={{ boxShadow: "2px 2px 5px gray" }} />
        <CartesianGrid stroke="" />
        <Line
          type="basis"
          dataKey="money"
          stroke="#ef7501"
          yAxisId={0}
          layout="horizontal"
        />
      </LineChart>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    range: state.rangeToChart,
  };
};

export default connect(mapStateToProps)(Chart);
