/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useState } from "react";
import { IconClose, IconDollar } from "../../app/icons";

const style = {
  container: css({
    maxWidth: "100%",
    display: "flex",
    backgroundColor: "#fff",
    borderRadius: "0.25rem",
    marginBottom: "20px",
    padding: "1.5rem",
    boxShadow:
      "rgb(29 71 123 / 4%) 0px 5px 10px, rgb(29 71 123 / 12%) 0px 1px 5px",
  }),
  title: css({
    marginLeft: "1rem",
    marginRight: "auto",
    "& > h3": {
      fontSize: "19px",
      fontWeight: 700,
      margin: "0 0 0.5rem 0",
    },
    "& > a": {
      color: "#25b6f1",
      textDecoration: "none",
      fontWeight: 600,
    },
  }),
  closeButton: css({
    backgroundColor: "#fff",
    border: "none",
    padding: 0,
    margin: "0 0 0 1rem",
  }),
};

export default function AwarenessCard() {
  const [showCard, setShowCard] = useState(true);

  const handleclose = () => setShowCard(false);

  return showCard ? (
    <div css={style.container}>
      <IconDollar />
      <div css={style.title}>
        <h3>Make your strongest offer when you buy with Opendoor</h3>
        <a
          role="link"
          href="https://buy.opendoor.com/offers/win?utm_source=bwod&amp;utm_medium=web&amp;utm_campaign=map&amp;referrer=https%3A%2F%2Fwww.opendoor.com%2Fhomes%2Ftampa%3Fmap%3Dfalse"
          aria-label="Learn more"
          target="__blank"
          rel="noopener noreferrer"
          type="button"
        >
          Learn more {">"}
        </a>
      </div>
      <button css={style.closeButton} onClick={handleclose}>
        <IconClose />
      </button>
    </div>
  ) : null;
}
