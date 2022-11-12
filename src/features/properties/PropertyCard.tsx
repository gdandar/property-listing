/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
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
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    marginBottom: 20,
  }),
  image: css({
    flexShrink: 1,
    flexBasis: "45%",
    maxWidth: "45%",
    "& > img": { width: "100%", objectFit: "cover" },
  }),
  description: css({
    flexBasis: "55%",
    maxWidth: "55%",
    "& > div": { padding: "20px 22px 15px 32px" },
  }),
};

export default function PropertyCard({ property }: Props) {
  return (
    <div css={styles.container}>
      <div css={styles.image}>
        <img src={property.images[0]} />
      </div>
      <div css={styles.description}>
        <div>
          <div>{currencyFormatter.format(property.purchasePrice)}</div>
          <div>{`${property.units[0].bedroom}bd, ${property.units[0].bathroom}ba, ${property.units[0].squareFootage}ft2`}</div>
          <div>{`${property.address.streetNumber} ${property.address.route}`}</div>
          <div>{`${property.address.locality}, ${property.address.stateCode}`}</div>
        </div>
      </div>
    </div>
  );
}
