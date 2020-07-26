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
      <LineChart width={1200} height={400} data={rangeObj}>
        <XAxis
          dataKey="dates"
          tickMargin={15}
          tick={{ fontSize: 10 }}
        />
        <YAxis dataKey="money" tickMargin={15} tick={{ fontSize: 10 }} />
        <Tooltip />
        <CartesianGrid stroke="" />
        <Line type="basis" dataKey="money" stroke="#ef7501" yAxisId={0} />
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
