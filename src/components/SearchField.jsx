import { styled } from "@mui/material/styles";

import { TextField } from "@mui/material";

const SearchFieldRoot = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "40ch",
  },
}));

function SearchField(props) {
  const { label, onChange, value, ...restProps } = props;
  return (
    <SearchFieldRoot>
      <StyledTextField
        label={label}
        value={value}
        onChange={onChange}
        {...restProps}
      />
    </SearchFieldRoot>
  );
}

export default SearchField;
