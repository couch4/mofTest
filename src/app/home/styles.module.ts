import { css } from "@panda/css";

export const backgroundHolder = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 0,
};

export const mainContainer = {
  position: "fixed",
  zIndex: 2,
  minHeight: "100dvh",
  top: 0,
};

export const scrollContainer = {
  position: "relative",
  zIndex: 3,
};

export const heroWrapper = {
  className: css({
    position: "relative",
    height: "85dvh",
    width: "100%",
    zIndex: 3,
  }),
};

export const contentWrapper = {
  className: css({
    marginTop: "calc(100dvh - 10rem)",
    background: "white",
    borderRadius: "2rem 2rem 0 0",
    // height: "50dvh",
    height: "100%",
    padding: "1rem 2rem 4rem",
    textAlign: "left",
    alignItems: "flex-start",
    zIndex: 3,
  }),
};

export const contentHeader = {
  className: css({
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  }),
};

export const contentMain = {
  className: css({
    width: "100%",
    paddingLeft: "4rem",
    alignItems: "flex-start",
  }),
};

export const contentIntro = {
  className: css({
    width: "100%",
  }),
};

export const contentStats = {
  className: css({
    width: "40%",
    gap: "1.5rem",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  }),
};

export const mainTitle = {
  className: css({
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left",
    gap: "2rem",
  }),
};