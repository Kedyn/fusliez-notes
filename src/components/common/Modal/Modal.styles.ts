import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  ModalBackdrop: {
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    display: "flex",
    bottom: 0,
    left: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1,
  },
  Modal: {
    backgroundColor: theme.backgroundColorPrimary,
    borderRadius: "0.5rem",
    display: "flex",
    width: "40rem",
    maxHeight: "90%",
    padding: "1rem 2rem",
  },
  ModalContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    width: "100%",
  },
  ModalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "0.5rem",
    borderBottom: `1px solid ${theme.borderColor}`,
  },
  ModalTitle: {
    fontSize: "2rem",
    fontWeight: 200,
    letterSpacing: "0.05em",
  },
  ModalClose: {
    appearance: "none",
    borderRadius: "50%",
    display: "block",
    width: "2rem",
    lineHeight: "2rem",
    padding: 0,
  },
  ModalBody: {
    padding: "1rem 0",
    overflowY: "auto",
  },
  ModalFooter: {
    borderTop: `1px solid ${theme.borderColor}`,
    padding: "1rem 0",
  },
}));
