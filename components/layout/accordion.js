import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { FakeData_Q_A } from "../fakeData/questions";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import styled from "styled-components";

const Div = styled.div`
  .jr_accordion {
    :hover {
      box-shadow: rgba(155, 222, 255, 0.2) 0px 7px 29px 0px;
    }
  }
`;
export default function Accordion_items() {
  const [open_readMore, setopen_readMore] = useState(false);

  console.log(open_readMore);
  return (
    <Div style={{ margin: "20px 0" }}>
      <Typography variant="h2">Welcome To Bangkok, Thailand!</Typography>
      <div>
        <Typography variant="body1">
          {`
          Bangkok is the capital and largest city of Thailand. It was a small
          fishing village 800 years ago, but now it's a bustling metropolis with
          a population of more than 8 million people, known to be magnificent
          for both tourism and business. With so many people living, working,
          visiting, and ultimately, retiring in Bangkok every year, there's
          plenty to do and see! Bangkok is just one of those cities that you
          can't really put into words - it's too big, too vibrant and it's
          constantly`}
        </Typography>

        {open_readMore ? (
          <Typography variant="body1" mt={2}>
            {`
            Bangkok is the capital and largest city of Thailand. It was a small
            fishing village 800 years ago, but now it's a bustling metropolis
            with a population of more than 8 million people, known to be
            magnificent for both tourism and business. With so many people
            living, working, visiting, and ultimately, retiring in Bangkok every
            year, there's plenty to do and see! Bangkok is just one of those
            cities that you can't really put into words - it's too big, too
            vibrant and it's constantly`}
          </Typography>
        ) : (
          ""
        )}
      </div>
      <button
        style={{
          backgroundColor: "white",
          padding: "0",
          margin: "10px 0",
          color: "#65acf0",
        }}
        onClick={() => setopen_readMore(!open_readMore)}
      >
        Read more
      </button>

      {FakeData_Q_A.map((items, key) => (
        <Accordion
        key = {key}
          square={true}
          className="jr_accordion"
          sx={{
            border: "3px solid #65acf0",
            borderRadius: "8px",
            margin: "15px 0",
            color: "#002161",
          }}
        >
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography variant="h3">
              <AddIcon className="jr_icon" />
              <strong>{items.question}</strong>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p>{items.answer}</p>
          </AccordionDetails>
        </Accordion>
      ))}
    </Div>
  );
}
