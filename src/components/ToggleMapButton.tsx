/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { IconList, IconMap } from "../app/icons";

const buttonStyle = css({
  color: "#fff",
  backgroundColor: "#222",
  fontWeight: 600,
  borderRadius: 80,
  border: "none",
  width: 88,
  height: 48,
  "& > div": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 14,
  },
  margin: "auto",
});

type Props = { showMap: boolean; onClick: () => void };

export default function ToggleMapButton({ showMap, onClick }: Props) {
  return (
    <button css={buttonStyle} onClick={onClick}>
      <div>
        {showMap ? (
          <>
            <IconList />
            List
          </>
        ) : (
          <>
            <IconMap />
            Map
          </>
        )}
      </div>
    </button>
  );
}
