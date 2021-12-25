import React from "react";
import { TextField } from "@mui/material";
import styled from "styled-components";

const Div = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  max-width: 480px;
  margin-bottom: 20px;
  .but_blue {
    font-size: 16px;
    padding: 10px 15px;
  }
`;
const Contact_me_form = () => {
  return (
    <Div>
      <form>
        <TextField
          id="outlined-basic"
          label="Your name"
          variant="outlined"
          margin="dense"
          // inputRef={input => input && input.focus()}
          fullWidth
          required
          error
          helperText="Please fill your name"
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <TextField
          id="outlined-basic"
          label="Phone no."
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <TextField
          placeholder="Type your massage"
          margin="dense"
          fullWidth
          multiline
          rows={4}
          variant="outlined"
        />

        <div style={{ textAlign: "right", marginTop: "10px" }}>
          <button type="submit" className="but_blue">
            Send massage
          </button>
        </div>
      </form>
    </Div>
  );
};

export default Contact_me_form;
