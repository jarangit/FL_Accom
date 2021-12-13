import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
export default function Accordion_items() {
  const [open_readMore, setopen_readMore] = useState(true);

  console.log(open_readMore);
  return (
    <div style={{ margin: "20px 0" }}>
      <Typography variant="h2">Welcome To Bangkok, Thailand!</Typography>
      <div>
        <Typography variant="body1">
          Bangkok is the capital and largest city of Thailand. It was a small
          fishing village 800 years ago, but now it's a bustling metropolis with
          a population of more than 8 million people, known to be magnificent
          for both tourism and business. With so many people living, working,
          visiting, and ultimately, retiring in Bangkok every year, there's
          plenty to do and see! Bangkok is just one of those cities that you
          can't really put into words - it's too big, too vibrant and it's
          constantly
        </Typography>

        {open_readMore ? (
          <Typography variant="body1" mt={2}>
            Bangkok is the capital and largest city of Thailand. It was a small
            fishing village 800 years ago, but now it's a bustling metropolis
            with a population of more than 8 million people, known to be
            magnificent for both tourism and business. With so many people
            living, working, visiting, and ultimately, retiring in Bangkok every
            year, there's plenty to do and see! Bangkok is just one of those
            cities that you can't really put into words - it's too big, too
            vibrant and it's constantly
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
            <AddIcon className="jr_icon" /> What Is The Lifestyle Like in
            Bangkok, Thailand ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Bangkok, Thailand is more than just temples and street food though;
            it's also home to nightclubs, bars and restaurants that cater to
            every taste. Even with all those attractions - you can find some
            peace by catching Bangkok's many riverside boat tours or strolling
            through one of Bangkok’s various local markets. When it comes to
            shopping, Bangkok does not disappoint there either. Just go to Phrom
            Phong or Siam, and enjoy the city’s malls where you’ll find a lot of
            popular and local brands to choose from. As for food, Thai food in
            Thailand just hits different. Especially the street food. Just
            imagine yourself living in Bangkok, perhaps a condo, apartment, or
            even a house, and then going out in the evening to enjoy delicious
            street food. You may find them in markets, or maybe just on the side
            of the road. Either way, it’s an experience unique to Thailand.
            However, there are also a vast variety of food choices apart from
            Thai food. There are also a lot of Western, and other Asian cuisines
            you can please your taste buds with.{" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
