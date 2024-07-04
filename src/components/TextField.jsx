import React, { forwardRef } from "react";
import { TextField as OldTextField } from "@mui/material";

const TextField = forwardRef((props, ref) => {
  return <OldTextField {...props} inputRef={ref} />;
});

export default TextField;
