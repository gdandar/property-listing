/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useState } from "react";
import "./App.css";
import { IconOpenDoor } from "./app/icons";
import { mq } from "./app/utils";
import ToggleMapButton from "./components/ToggleMapButton";
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
    gridColumn: "1 / 3",
    gridRow: "1",
    boxShadow: "0 1px 4px rgb(68 89 109 / 15%)",
    display: "flex",
    alignItems: "center",
    padding: "0 22px",
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
      <header css={layout.header}>
        <IconOpenDoor />
      </header>
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
        <ToggleMapButton showMap={showMap} onClick={handleSwitch} />
      </div>
    </div>
  );
}

export default App;
