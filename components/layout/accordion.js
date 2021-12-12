import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
export default function Accordion_items() {
  return (
    <div style={{ margin: "20px 0" }}>
      <Typography variant="h2">Welcome To Bangkok, Thailand!</Typography>
      <Typography variant="body1">
        Bangkok is the capital and largest city of Thailand. It was a small
       
      </Typography>
        <Button variant="text">Read more</Button>
      <Accordion
        square={true}
        sx={{
          border: "2px solid #65acf0",
          borderRadius: "8px",
          margin: "15px 0",
          color: "#002161",
        }}
      >
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>
            <AddIcon /> Accordion 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
