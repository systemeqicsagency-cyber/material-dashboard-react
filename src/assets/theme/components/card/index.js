/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React Base Styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import boxShadows from "assets/theme/base/boxShadows";

// Material Dashboard 2 React Helper Function
import rgba from "assets/theme/functions/rgba";

const { black, white } = colors;
const { borderWidth, borderRadius } = borders;
const { md } = boxShadows;

const card = {
  styleOverrides: {
    root: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      minWidth: 0,
      wordWrap: "break-word",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(10px)",
      backgroundClip: "border-box",
      border: `${borderWidth[0]} solid ${rgba(white.main, 0.1)}`,
      borderRadius: borderRadius.xl,
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
      overflow: "visible",
    },
  },
};

export default card;
