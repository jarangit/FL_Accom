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
      transition: 0.3s;
      box-shadow: rgba(155, 222, 255, 0.5) 0px 7px 19px 0px;
    }
  }
`;
export default function Accordion_items() {
  const [open_readMore, setopen_readMore] = useState(false);

  console.log(open_readMore);
  return (
    <Div style={{ margin: "50px 0" }}>
      <h2 className="jr_color_primary">
        <strong>Welcome To Bangkok, Thailand!</strong>
      </h2>
      <div>
        <p className="jr_f16" style={{ paddingTop: "20px" }}>
          {`
          Bangkok is the capital and largest city of Thailand. It was a small
          fishing village 800 years ago, but now it's a bustling metropolis with
          a population of more than 8 million people, known to be magnificent
          for both tourism and business. With so many people living, working,
          visiting, and ultimately, retiring in Bangkok every year, there's
          plenty to do and see! Bangkok is just one of those cities that you
          can't really put into words - it's too big, too vibrant and it's
          constantly`}
        </p>

        {open_readMore ? (
          <p className="jr_f16" style={{ paddingTop: "20px" }}>
            {`
            changing. And we’re not being biased! It makes sense why it has gained so much attention throughout the years. With so much to offer, more and more properties have popped up around the city of Bangkok as the number of people who come to live here from all over the world have increased. Properties for sale in Bangkok are available in a range of different areas. The best way to find out about properties for sale in Bangkok is to go through reliable sources such as real estate websites, like the one you’re in now. ;)`}
          </p>
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
        {open_readMore ? "Show less" : "Read more"}
      </button>

      {FakeData_Q_A.map((items, key) => (
        <Accordion
          key={key}
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
            <p className="jr_f14 jr_icon">
              <AddIcon className="jr_icon" />
              <strong>{items.question}</strong>
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="jr_f14 jr_icon">{items.answer}</p>
          </AccordionDetails>
        </Accordion>
      ))}
    </Div>
  );
}
