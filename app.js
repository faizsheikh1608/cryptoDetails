import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./component/Body";

const AppLayout = function () {
  return (
    <div className="app--body">
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<AppLayout />);
