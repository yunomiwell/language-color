// import styled from '@emotion/styled'

import React from "react";
import { Color } from "../types";

type WordBoxProps = {
  children: React.ReactNode;
  color: Color;
};

export const WordBox = ({ children, color }: WordBoxProps) => {
  return (
    <span
      style={{ backgroundColor: `hsl(${color[0]} ${color[1]}% ${color[2]}%` }}
    >
      {children}
    </span>
  );
};
