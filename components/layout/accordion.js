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
        fishing village 800 years ago, but now it's a bustling metropolis with a
        population of more than 8 million people, known to be magnificent for
        both tourism and business. With so many people living, working,
        visiting, and ultimately, retiring in Bangkok every year, there's plenty
        to do and see! Bangkok is just one of those cities that you can't really
        put into words - it's too big, too vibrant and it's constantly
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
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
