import React from "react";
import { ButtonContent } from "./styled";

function Button(props) {
  return (
    <ButtonContent onClick={props.onClick} className={props.className}>
      {props.children}
    </ButtonContent>
  );
}

export default Button;
