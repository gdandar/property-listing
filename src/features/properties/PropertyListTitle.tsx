/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useAppSelector } from "../../app/hooks";
import { selectPropertiesCount } from "./propertiesSlice";

const layout = {
  title: css({
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 1.15,
    margin: "0 0 4px",
  }),
  count: css({
    fontSize: 14,
    lineHeight: "24px",
    marginBottom: 24,
  }),
};
export default function PropertyListTitle() {
  const propertiesCount = useAppSelector(selectPropertiesCount);

  return (
    <div>
      <h1 css={layout.title}>Home for sale in Tampa</h1>
      <div css={layout.count}>{propertiesCount} listings found</div>
    </div>
  );
}
