import React from "react";
import Header from "./Header/Header";
import Calendar from "./Calendar/CalendarWrapper";
import SearchPanel from "./SearchPanel/Searchpanel";
import Chart from "./Chart/Chart";


function App() {
  return (
    <div className="App">
      <Header />
      <SearchPanel />
      <Calendar />
      <Chart />
    </div>
  );
}

export default App;
