import React, { useState } from "react";
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
  const [ErrorInputName, setErrorInputName] = useState(false);
  const [ErrorInputEmail, setErrorInputEmail] = useState(false);
  const [ErrorInputPhone, setErrorInputPhone] = useState(false);
  const [dataName, setdataName] = useState("");
  const [dataEmail, setdataEmail] = useState("");
  const [dataPhone, setdataPhone] = useState("");
  const [dataForm, setdataForm] = useState({
    name: {
      text_value: "",
      error_input: "",
    },
    email: {
      text_value: "",
      error_input: "",
    },
    phone: {
      text_value: "",
      error_input: "",
    },
    massage: {
      text_value: "",
      error_input: "",
    },
  });
  function onSubmit(e) {
    e.preventDefault();
    console.log(dataName);

    if (dataName === "") {
      setErrorInputName(true);
    } else if (dataEmail === "") {
      setErrorInputEmail(true)
    }else if (dataPhone === "") {
      setErrorInputPhone(true)
    }
  }
  function onChange(e) {
    setdataName(e.target.value);
    console.log(dataName);
    console.log(dataEmail);
    console.log(dataPhone);
    if (e.target.name === "name") {
      setdataName(e.target.value)
    }else if (e.target.name === "email") {
      // setdataEmail(e.target.value)
    } else if (e.target.name === 'phone') {
      setdataPhone(e.target.value)
    } else ''
  }
  return (
    <Div>
      <form onSubmit={onSubmit} onChange={onChange}>
        <TextField
          id="outlined-basic"
          label="Your name"
          variant="outlined"
          margin="dense"
          value={dataName}
          name="name"
          fullWidth
          error={ErrorInputName}
          helperText={ErrorInputName ? "Please fill your name" : false}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          margin="dense"
          name="email"
          value={dataEmail}
          fullWidth
          error={ErrorInputEmail}
          helperText={ErrorInputEmail ? "Please fill your email" : false}
        />
        <TextField
          id="outlined-basic"
          label="Phone no."
          variant="outlined"
          margin="dense"
          value={dataPhone}
          name="phone"
          fullWidth
          error={ErrorInputPhone}
          helperText={ErrorInputPhone ? "Please fill your phone no." : false}
        />
        <TextField
          placeholder="Type your massage"
          margin="dense"
          value={dataForm.massage.text_value}
          name="massage"
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
