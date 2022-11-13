/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import * as R from "remeda";
import { useState } from "react";

const layout = {
  container: css({
    position: "relative",
    marginLeft: 8,
  }),
  labelButton: (open: boolean) =>
    css({
      padding: "4.5px 8px",
      fontWeight: 700,
      backgroundColor: "#fff",
      border: "3px solid #222",
      borderRadius: "5px",
      color: "#111",
      cursor: "pointer",
      transition: "0.3s ease",
      "&:hover": {
        backgroundColor: "#eee",
      },
      "& > div": {
        display: "flex",
        alignItems: "center",
        "&:after": {
          content: "''",
          marginLeft: "4px",
          width: "8px",
          height: "8px",
          clipPath: "polygon(100% 0%, 0 0%, 50% 100%)",
          backgroundColor: "#000",
          transition: "transform .2s ease",
          transform: `rotate(${open ? "180" : "0"}deg)`,
        },
      },
    }),
  dropdown: (visible: boolean) =>
    css({
      position: "absolute",
      top: 40,
      right: 0,
      zIndex: 500,
      background: "#fff",
      maxHeight: "40vmax",
      minWidth: "10rem",
      padding: "0.4rem",
      display: "flex",
      flexDirection: "column",
      borderRadius: "5px",
      border: "3px solid #222",
      transition: "max-height 0.2s ease",
      overflow: "auto",
      visibility: visible ? "visible" : "hidden",
    }),
  dropdownItem: (active: boolean) =>
    css({
      display: "flex",
      alignItems: "center",
      padding: "4px 0",
      fontSize: "0.9rem",
      fontWeight: 400,
      cursor: "pointer",
      backgroundColor: active ? "#fafafa" : "#fff",
      "&:hover, :focus, :focus:hover": {
        backgroundColor: "#fafafa",
        outline: "none",
      },
    }),
};

type SelectOption = {
  value: string;
  label: string;
};

type Props = {
  options: Array<SelectOption>;
  defaultValue: string;
  onChange: (selectedOption: SelectOption) => void;
};

export default function Select({ options, defaultValue, onChange }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(
    R.findIndex(options, (option) => option.value === defaultValue)
  );
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOptionChange = (index: number) => {
    setSelectedIndex(index);
    onChange(options[index]);
    handleClose();
  };

  return (
    <div css={layout.container}>
      <button onClick={handleOpen} css={layout.labelButton(open)}>
        <div>{options[selectedIndex].label}</div>
      </button>
      <div css={layout.dropdown(open)}>
        {options.map((option, index) => (
          <div
            key={option.value}
            css={layout.dropdownItem(selectedIndex === index)}
            onClick={() => handleOptionChange(index)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
}
