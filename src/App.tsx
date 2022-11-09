/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import "./App.css";
import PropertyList from "./features/properties/PropertyList";
import PropertySearch from "./features/properties/PropertySearch";
import PropertySortOptions from "./features/properties/PropertySortOptions";

const layout = {
  main: css({
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    maxWidth: "100vw",
    margin: 0,
  }),
  header: css({
    height: 72,
  }),
  content: css({
    display: "flex",
    maxWidth: "100vw",
    maxHeight: "calc(100vh - 72px)",
    "& img": { width: "100%", height: "100%", objectFit: "cover" },
  }),
  rightPane: css({
    overflow: "auto",
    width: 680,
    flex: "0 0 auto",
  }),
};

function App() {
  return (
    <div css={layout.main}>
      <header css={layout.header}>
        <PropertySearch />
      </header>
      <div css={layout.content}>
        <div>
          <img src="/map.jpg" />
        </div>
        <div css={layout.rightPane}>
          <PropertySortOptions />
          <PropertyList />
        </div>
      </div>
    </div>
  );
}

export default App;
