/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

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
            <svg
              width="17"
              height="17"
              stroke="#FFFFFF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.4 2.5a1.1 1.1 0 112.2 0 1.1 1.1 0 01-2.2 0zM1.4 7.5a1.1 1.1 0 112.2 0 1.1 1.1 0 01-2.2 0zM1.4 12.5a1.1 1.1 0 112.2 0 1.1 1.1 0 01-2.2 0z"
                stroke="#fff"
                stroke-width="1.2"
              ></path>
              <path
                d="M13.1 2.5a.6.6 0 00-.6-.6H6a.6.6 0 000 1.2h6.5a.6.6 0 00.6-.6zM13.1 7.5a.6.6 0 00-.6-.6H6a.6.6 0 000 1.2h6.5a.6.6 0 00.6-.6zM13.1 12.5a.6.6 0 00-.6-.6H6a.6.6 0 100 1.2h6.5a.6.6 0 00.6-.6z"
                fill="#fff"
                stroke="#fff"
                stroke-width=".2"
              ></path>
            </svg>
            List
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12.666666666666668"
              height="12"
              viewBox="0 0 19 18"
            >
              <g
                fill="none"
                fill-rule="evenodd"
                stroke="#FFFFFF"
                stroke-width="2"
              >
                <path d="M1 2.57341976L1 16.7103251 6.00045887 15.4244928 6.00883523 1.27356913 6.00591467 1.27303532 1 2.57341976zM6.00883599 1.27227645L6.00886384 1.22522092 6.21977824 1.21748006 6.00883599 1.27227645zM12 2.5753892L12 16.353089 12.7961009 16.5056134 17 15.4246108 17 1.28967491 12 2.5753892z"></path>
                <path d="M12,2.6 L7.00891689,1.4770063 L6,1.83186439 L6,15.4 L11.1262056,16.5533963 L12,16.5301385 L12,2.6 Z"></path>
              </g>
            </svg>
            Map
          </>
        )}
      </div>
    </button>
  );
}