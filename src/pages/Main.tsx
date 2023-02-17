import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import { expand, hide, selectCount } from "../accordion.store";
import { Details } from "../components/Details";
import { useAppDispatch, useAppSelector } from "../store";

export const Main = () => {
  const dispatch = useAppDispatch();
  const expanded = useAppSelector(selectCount);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      if (isExpanded) {
        dispatch(expand(panel));
      } else {
        dispatch(hide());
      }
    };

  return (
    <div>
      <h1>List page</h1>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            General settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Details name="panel1" />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            General settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
            quidem sed error deleniti quis rem corrupti itaque sapiente atque
            aliquam animi! Debitis molestiae itaque, vero asperiores odit ipsa
            pariatur temporibus.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
