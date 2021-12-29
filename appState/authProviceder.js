import React, { createContext, useState, useEffect } from "react";
import Router from "next/router";

export const AuthContext = createContext();

const AuthProvider = ({ children, userData }) => {
  const [openFilter_mb, setopenFilter_mb] = useState(false);
  const [open_form_filter_mb, setopen_form_filter_mb] = useState(false);
  const [data_selected, setdata_selected] = useState({
    min: "",
    max: "",
  });
  const [onCheckedContactForm, setonCheckedContactForm] = useState(false);
  const [onConpleteContactForm, setonConpleteContactForm] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        openFilter_mb,
        setopenFilter_mb,
        open_form_filter_mb,
        setopen_form_filter_mb,
        data_selected,
        setdata_selected,
        onCheckedContactForm,
        setonCheckedContactForm,
        onConpleteContactForm,
        setonConpleteContactForm,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
