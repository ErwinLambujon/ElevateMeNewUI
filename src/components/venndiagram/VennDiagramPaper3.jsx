// VennDiagramPaper.js

import React from "react";
import { Typography, Box, Paper as MuiPaper } from "@mui/material";
import Venn3 from "../../res/venn.png";

const VennDiagramPaper = () => {
  return (
    <MuiPaper elevation={3} sx={{ borderRadius: 5, p: 3, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
      <Typography variant="h4" sx={{ marginTop: "-8px", marginBottom: "12px", marginLeft:"-140px" }}>Venn Diagram</Typography>
      <Box sx={{ position: "relative", marginBottom: "20px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              top: "80px",
              left: "35px",
              color: "#8E8E8E",
              fontSize: "14px",
            }}
          >
            TextBox 1
          </Typography>
          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              top: "80px",
              right: "35px",
              color: "#8E8E8E",
              fontSize: "14px",
            }}
          >
            TextBox 2
          </Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{
            position: "absolute",
            bottom: "50px",
            left: "50%",
            transform: "translate(-50%)",
            color: "#8E8E8E",
            fontSize: "14px",
          }}
        >
          TextBox 3
        </Typography>
        <img
          src={Venn3}
          alt="Venn Diagram"
          style={{ zIndex: 0, width: "325px", Height: "50px" }}
        />
      </Box>
    </MuiPaper>
  );
};

export default VennDiagramPaper;
