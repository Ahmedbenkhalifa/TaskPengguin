import React from "react";
import { BtnWatchList } from "./Button.styles";

const Button = (props) => {
  const { icon: Icon, children, ...rest } = props;
  return (
    <BtnWatchList {...rest}>
      <Icon sx={{ mr: 0.5 }} />
      {children}
    </BtnWatchList>
  );
};

export default Button;
