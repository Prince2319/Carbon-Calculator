import React from "react";
import Navbar from "./Navbar";
// import Typography from "typography";
// import sutroTheme from "typography-theme-sutro";
// const typography = new Typography(sutroTheme);
import Typography from "@material-ui/core/Typography";

function Sece() {
  return (
    <>
      <Navbar />
      <Typography
        variant="h5"
        color="primary"
        style={{ backgroundColor: "#f2f2f2" }}
      >
        Heading 1
      </Typography>

      <Typography style={{ backgroundColor: "#f2f2f2" }}>
        This is the body text.
      </Typography>

      <Typography
        variant="p"
        color="secondary"
        style={{ backgroundColor: "#f2f2f2" }}
      >
        Heading 2
      </Typography>

      {/* <div style={typography.toJSON()}>
        <h1 style={typography.scale(2)}>Heading 1</h1>
        <p style={typography.scale(1)}>Body Text</p>
      </div> */}
    </>
  );
}

export default Sece;
