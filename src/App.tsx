/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useState } from "react";
import "./App.css";
import { mq } from "./app/utils";
import PropertyList from "./features/properties/PropertyList";
import PropertyListTitle from "./features/properties/PropertyListTitle";
import PropertySearch from "./features/properties/PropertySearch";
import PropertySortOptions from "./features/properties/PropertySortOptions";

const layout = {
  main: css({
    display: "grid",
    overflow: "hidden",
    height: "100vh",
    width: "100vw",
    gridTemplateColumns: "minmax(50%, 1fr) minmax(auto, 680px)",
    gridTemplateRows: "72px auto 1fr",
  }),
  header: css({
    backgroundColor: "green",
    gridColumn: "1 / 3",
    gridRow: "1",
  }),
  listHeader: css(
    mq({
      padding: "22px 32px",
      gridColumn: ["1 / 3", undefined, "2 / 3"],
      gridRow: "2",
    })
  ),
  map: css(
    mq({
      gridColumn: ["1 / 3", undefined, "1 / 2"],
      gridRow: ["3", undefined, "2 / 4"],
      "& > img": { width: "100%", height: "100%", objectFit: "cover" },
    })
  ),
  list: (showMap: boolean) =>
    css(
      mq({
        gridColumn: ["3 / -3", undefined, "2"],
        gridRow: "3",
        backgroundColor: "#fff",
        height: "100%",
        overflowY: "scroll",
        opacity: [showMap ? 0 : 1, undefined, 1],
        transition: ["all 1s", undefined, "initial"],
        transform: [
          `translate(${showMap ? "-1000px" : "0"})`,
          undefined,
          "translate(0)",
        ],
      })
    ),
  filter: (showMap: boolean) =>
    css(
      mq({
        display: [showMap ? "none" : "flex", undefined, "flex"],
        transition: "all .2s ease",
      })
    ),
  fader: css(
    mq({
      display: ["flex", undefined, "none"],
      justifyContent: "center",
      position: "fixed",
      bottom: 10,
      left: 0,
      right: 0,
    })
  ),
};

function App() {
  const [showMap, setShowMap] = useState(false);

  const handleSwitch = () => {
    setShowMap((show) => !show);
  };

  return (
    <div css={layout.main}>
      <header css={layout.header}></header>
      <div css={layout.listHeader}>
        <PropertyListTitle />
        <div css={layout.filter(showMap)}>
          <PropertySearch />
          <PropertySortOptions />
        </div>
      </div>
      <div css={layout.map}>
        <img alt="Map" src="/map.jpg" />
      </div>
      <div css={layout.list(showMap)}>
        <PropertyList />
      </div>
      <div css={layout.fader}>
        <button onClick={handleSwitch}>Switch</button>
      </div>
    </div>
  );
}

export default App;
