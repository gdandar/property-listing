/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { mq } from "../../app/utils";
import { Property } from "./types";

type Props = {
  property: Property;
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const styles = {
  container: css({
    borderRadius: 16,
    boxShadow:
      "rgb(29 71 123 / 4%) 0px 5px 10px, rgb(29 71 123 / 12%) 0px 1px 5px",
    display: "grid",
    gridTemplateColumns: "45% 1fr",
    gridTemplateRows: "auto auto",
    marginBottom: 20,
  }),
  image: css(
    mq({
      backgroundSize: "cover",
      borderRadius: [
        "16px 16px 0 0",
        "16px 0 0 16px",
        "16px 16px 0 0",
        "16px 0 0 16px",
      ],
      gridColumn: ["1 / 3", "1", "1 / 3", "1"],
      minHeight: ["calc(60vw)", 0, "calc(30vw)", 0],
      gridRow: "1",
    })
  ),
  description: css(
    mq({
      padding: "32px 22px 32px 32px",
      gridColumn: ["1/ 3", "2", "1 / 3", "2"],
      gridRow: ["2", "1", "2", "1"],
      "& h2": {
        fontSize: 19,
        fontWeight: "bold",
        lineHeight: "28px",
        padding: 0,
        margin: 0,
      },
      "& span": {
        fontSize: 14,
        lineHeight: "24px",
        display: "block",
        color: "#6e6e6e",
      },
    })
  ),
};

export default function PropertyCard({ property }: Props) {
  return (
    <div css={styles.container}>
      <div
        css={styles.image}
        style={{ backgroundImage: `url(${property.images[0]})` }}
      ></div>
      <div css={styles.description}>
        <h2>{currencyFormatter.format(property.purchasePrice)}</h2>
        <span>{`${property.units[0].bedroom}bd, ${property.units[0].bathroom}ba, ${property.units[0].squareFootage}ft2`}</span>
        <span>{`${property.address.streetNumber} ${property.address.route}`}</span>
        <span>{`${property.address.locality}, ${property.address.stateCode}`}</span>
      </div>
    </div>
  );
}
