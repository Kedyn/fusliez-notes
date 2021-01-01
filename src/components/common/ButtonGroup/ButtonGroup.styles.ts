import { createUseStyles } from "react-jss";

interface IButtonGroupStylesProps {
  inline: boolean;
}

export default createUseStyles({
  ButtonGroup: (props: IButtonGroupStylesProps) => ({
    display: !props.inline ? "flex" : "inline-flex",
    flexWrap: "wrap",
    margin: "0 0.25rem",

    "&>*": {
      flex: "1 1 auto",

      "&:not(:first-child)": {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      },
      "&:not(:last-child)": {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
    },
  }),
});
