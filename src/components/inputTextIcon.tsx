import { Box, SvgIconProps } from "@mui/material";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { FunctionComponent } from "react";

interface InputTextIconProps {
  icon: React.ReactElement<SvgIconProps>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  value: string;
}

const InputTextIcon: FunctionComponent<InputTextIconProps> = (props) => {
  return (
    <Box
      component="form"
      onSubmit={props.onSubmit}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        border: "1px solid grey",
        borderRadius: "5px",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Mon hobby ..."
        inputProps={{ "aria-label": "add a new hobby" }}
        name="inputText"
        required
        fullWidth
        id="inputText"
        value={props.value}
        onChange={props.onChange}
      />

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

      <IconButton type="submit" color="primary" sx={{ p: "10px" }} aria-label="search">
        {props.icon}
      </IconButton>
    </Box>
  );
};

export default InputTextIcon;
