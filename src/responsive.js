import { css } from "styled-components";
import React from "react";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};
export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 425px) {
      ${props}
    }
  `;
};
export const tab = (props) => {
  return css`
    @media only screen and (max-width: 1024px) {
      ${props}
    }
  `;
};
