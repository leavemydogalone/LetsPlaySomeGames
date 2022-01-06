import React from "react";

type Props = {
  text: string;
  handleClick: () => void;
};

export default function Button({ handleClick, text }: Props) {
  return (
    <button className="theButton" onClick={handleClick}>
      {text}
    </button>
  );
}
